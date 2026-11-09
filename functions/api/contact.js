const JSON_HEADERS = { "Content-Type": "application/json" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TURNSTILE_FAILED_MSG = "Verifikasi Turnstile/bot gagal.";

function jsonResponse(payload, status) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: JSON_HEADERS,
  });
}

function errorResponse(message, status) {
  return jsonResponse({ error: message }, status);
}

export async function onRequestPost(context) {
  try {
    const { request, env } = context;

    // 0. Only accept JSON bodies
    const contentType = request.headers.get("Content-Type") || "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return errorResponse("Content-Type harus application/json.", 400);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return errorResponse("Format permintaan tidak valid.", 400);
    }
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return errorResponse("Format permintaan tidak valid.", 400);
    }

    const { botfield, turnstileToken } = body;

    // 1. Layer 2: Honeypot Spam Trap Check
    if (botfield) {
      return jsonResponse({ success: true, message: "OK" }, 200);
    }

    // 2. Layer 4: Input Validation & Length Limits
    if (
      typeof body.name !== "string" ||
      typeof body.email !== "string" ||
      typeof body.message !== "string"
    ) {
      return errorResponse("Mohon isi semua bidang yang diperlukan.", 400);
    }

    const name = body.name.trim();
    const email = body.email.trim();
    const message = body.message.trim();

    if (!name || !email || !message) {
      return errorResponse("Mohon isi semua bidang yang diperlukan.", 400);
    }

    if (name.length > 100 || email.length > 100 || message.length > 2000) {
      return errorResponse("Ukuran pesan melebihi batas yang diizinkan.", 400);
    }

    if (!EMAIL_RE.test(email)) {
      return errorResponse("Alamat e-mail tidak valid.", 400);
    }

    // 3. Layer 3: Cloudflare Turnstile Server Verification (If configured)
    const turnstileSecret = env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret) {
      if (typeof turnstileToken !== "string" || !turnstileToken) {
        return errorResponse(TURNSTILE_FAILED_MSG, 403);
      }

      let turnstileOutcome;
      try {
        const turnstileVerify = await fetch(
          "https://challenges.cloudflare.com/turnstile/v0/siteverify",
          {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
              secret: turnstileSecret,
              response: turnstileToken,
              remoteip: request.headers.get("CF-Connecting-IP") || "",
            }),
          }
        );
        turnstileOutcome = await turnstileVerify.json();
      } catch (verifyErr) {
        // Fail closed: if siteverify is unreachable or returns garbage, reject.
        console.error("Turnstile siteverify failed:", verifyErr);
        return errorResponse(TURNSTILE_FAILED_MSG, 403);
      }

      if (!turnstileOutcome || turnstileOutcome.success !== true) {
        return errorResponse(TURNSTILE_FAILED_MSG, 403);
      }
    } else {
      console.warn(
        "TURNSTILE_SECRET_KEY is not set; skipping Turnstile verification."
      );
    }

    // 4. Send email via Resend API
    const apiKey = env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");
      return errorResponse("Gagal mengirim pesan. Silakan coba lagi nanti.", 500);
    }

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Triroyal Contact <onboarding@resend.dev>",
        to: ["mail@triroyal.net"],
        reply_to: email,
        subject: `Pesan Baru dari ${name} (triroyal.net)`,
        text: `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
      }),
    });

    if (!resendRes.ok) {
      const errData = await resendRes.text();
      throw new Error(`Resend error (${resendRes.status}): ${errData}`);
    }

    return jsonResponse(
      { success: true, message: "Pesan telah berhasil dikirim!" },
      200
    );
  } catch (err) {
    console.error("Contact form error:", err);
    return errorResponse("Gagal mengirim pesan. Silakan coba lagi nanti.", 500);
  }
}
