export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const body = await request.json();
    const { name, email, message, botfield, turnstileToken } = body;

    // 1. Layer 2: Honeypot Spam Trap Check
    if (botfield) {
      return new Response(JSON.stringify({ success: true, message: "OK" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    // 2. Layer 4: Input Validation & Length Limits
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Mohon isi semua bidang yang diperlukan." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (name.length > 100 || email.length > 100 || message.length > 2000) {
      return new Response(
        JSON.stringify({ error: "Ukuran pesan melebihi batas yang diizinkan." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 3. Layer 3: Cloudflare Turnstile Server Verification (If configured)
    const turnstileSecret = env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret && turnstileToken) {
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

      const turnstileOutcome = await turnstileVerify.json();
      if (!turnstileOutcome.success) {
        return new Response(
          JSON.stringify({ error: "Verifikasi Turnstile/bot gagal." }),
          { status: 403, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    // 4. Send email via Resend API
    const apiKey = env.RESEND_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({
          error: "RESEND_API_KEY belum dikonfigurasi di Cloudflare Pages.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
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
      throw new Error(`Resend error: ${errData}`);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Pesan telah berhasil dikirim!",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message || "Gagal mengirim pesan." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
