import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

const MAX_NAME_LENGTH = 100
const MAX_EMAIL_LENGTH = 100
const MAX_MESSAGE_LENGTH = 2000

const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY

const ContactForm = () => {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    message: "",
    botfield: "",
  })
  const [turnstileToken, setTurnstileToken] = React.useState("")
  const [errorMessage, setErrorMessage] = React.useState("")
  const [successMessage, setSuccessMessage] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  const turnstileRef = React.useRef(null)

  React.useEffect(() => {
    if (!turnstileSiteKey) return

    // Dynamically load Cloudflare Turnstile script if site key is configured
    const scriptId = "cf-turnstile-script"
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script")
      script.id = scriptId
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
      script.async = true
      script.defer = true
      script.onload = renderTurnstile
      document.body.appendChild(script)
    } else if (window.turnstile && turnstileRef.current) {
      renderTurnstile()
    }

    function renderTurnstile() {
      if (window.turnstile && turnstileRef.current) {
        window.turnstile.render(turnstileRef.current, {
          sitekey: turnstileSiteKey,
          callback: (token) => setTurnstileToken(token),
          "error-callback": () => setTurnstileToken(""),
        })
      }
    }
  }, [])

  const handleChange = (e) => {
    setErrorMessage("")
    setSuccessMessage("")
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage("")
    setSuccessMessage("")

    // Client-side Validation Checks
    if (
      !formState.name.trim() ||
      !formState.email.trim() ||
      !formState.message.trim()
    ) {
      setErrorMessage("Mohon lengkapi semua bidang input.")
      return
    }

    if (formState.name.length > MAX_NAME_LENGTH) {
      setErrorMessage(`Nama tidak boleh melebihi ${MAX_NAME_LENGTH} karakter.`)
      return
    }

    if (formState.email.length > MAX_EMAIL_LENGTH) {
      setErrorMessage(
        `E-mail tidak boleh melebihi ${MAX_EMAIL_LENGTH} karakter.`
      )
      return
    }

    if (formState.message.length > MAX_MESSAGE_LENGTH) {
      setErrorMessage(
        `Pesan tidak boleh melebihi ${MAX_MESSAGE_LENGTH} karakter.`
      )
      return
    }

    setIsLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formState, turnstileToken }),
      })
      const data = await res.json()

      if (res.ok && data.success) {
        setFormState({ name: "", email: "", message: "", botfield: "" })
        setTurnstileToken("")
        if (window.turnstile && turnstileRef.current) {
          window.turnstile.reset(turnstileRef.current)
        }
        setSuccessMessage("Pesan telah berhasil dikirim! Terima kasih.")
      } else {
        setErrorMessage(
          data.error || "Gagal mengirim pesan. Silakan coba lagi."
        )
      }
    } catch (err) {
      setErrorMessage("Terjadi kesalahan jaringan. Silakan coba lagi.")
    } finally {
      setIsLoading(false)
    }
  }

  const remainingChars = MAX_MESSAGE_LENGTH - formState.message.length

  return (
    <form name="contact" onSubmit={handleSubmit}>
      {errorMessage && (
        <div className="notification is-danger is-light mb-4">
          {errorMessage}
        </div>
      )}
      {successMessage && (
        <div className="notification is-success is-light mb-4">
          {successMessage}
        </div>
      )}

      {/* Honeypot spam trap */}
      <div className="field" hidden>
        <label className="label" htmlFor="botfield">
          Don’t fill this out:
          <div className="control">
            <input
              id="botfield"
              name="botfield"
              value={formState.botfield}
              onChange={handleChange}
            />
          </div>
        </label>
      </div>

      <div className="field">
        <label className="label" htmlFor="name">
          Nama{" "}
          <span className="has-text-grey-light is-size-7">
            (Maks. {MAX_NAME_LENGTH} karakter)
          </span>
          <input
            required
            maxLength={MAX_NAME_LENGTH}
            className="full-width input"
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Masukkan nama Anda"
          />
        </label>
      </div>

      <div className="field">
        <label className="label" htmlFor="email">
          E-mail{" "}
          <span className="has-text-grey-light is-size-7">
            (Maks. {MAX_EMAIL_LENGTH} karakter)
          </span>
          <input
            required
            maxLength={MAX_EMAIL_LENGTH}
            type="email"
            id="email"
            name="email"
            className="full-width input"
            value={formState.email}
            onChange={handleChange}
            placeholder="contoh@email.com"
          />
        </label>
      </div>

      <div className="field">
        <div className="is-flex is-justify-content-space-between align-items-center">
          <label className="label mb-1" htmlFor="message">
            Pesan
          </label>
          <span
            className={`is-size-7 ${
              remainingChars < 100 ? "has-text-danger" : "has-text-grey"
            }`}
          >
            {remainingChars} / {MAX_MESSAGE_LENGTH} karakter tersisa
          </span>
        </div>
        <textarea
          required
          maxLength={MAX_MESSAGE_LENGTH}
          className="textarea full-width"
          id="message"
          name="message"
          rows={5}
          value={formState.message}
          onChange={handleChange}
          placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
        />
      </div>

      {turnstileSiteKey && (
        <div className="field my-3">
          <div ref={turnstileRef} />
        </div>
      )}

      <div className="field mt-4">
        <button
          className={`button is-primary ${isLoading ? "is-loading" : ""}`}
          type="submit"
          disabled={isLoading}
        >
          <span className="icon">
            <FontAwesomeIcon icon={faPaperPlane} />
          </span>
          <span>Kirim</span>
        </button>
      </div>
    </form>
  )
}

export default ContactForm
