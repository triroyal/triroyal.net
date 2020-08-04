import React from "react"

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&")

const ContactForm = () => {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = React.useState("")

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    setIsLoading("is-loading")
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formState,
      }),
    })
      .then(() => {
        setFormState({
          name: "",
          email: "",
          message: "",
        })
        alert("Pesan telah dikirim!")
      })
      .catch((err) => alert(err))
      .finally(setTimeout(() => setIsLoading(""), 1000))
  }

  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="botfield"
      // data-netlify-recaptcha="true"
      onSubmit={handleSubmit}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <div className="field" hidden>
        <label className="label" htmlFor="botfield">
          Don’t fill this out:
          <div className="control">
            <input
              id="botfield"
              name="botfield"
              value={formState.botfield ? formState.botfield : ""}
              onChange={handleChange}
            />
          </div>
        </label>
      </div>
      <div className="field">
        <label className="label" htmlFor="name">
          Nama
          <input
            className="full-width"
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="field">
        <label className="label" htmlFor="email">
          E-mail
          <input
            type="email"
            id="email"
            name="email"
            className="full-width"
            value={formState.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="field">
        <label className="label" htmlFor="message">
          Pesan
          <textarea
            className="textarea full-width"
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
          />
        </label>
      </div>
      {/* <div data-netlify-recaptcha="true"></div> */}
      <div class="field">
        <button class={`button is-primary ${isLoading}`} type="submit">
          Kirim
        </button>
      </div>
    </form>
  )
}

export default ContactForm
