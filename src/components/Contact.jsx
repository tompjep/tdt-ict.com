import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <div className="contact-info">
          <span className="section-label">Contact</span>
          <h2 className="contact-title">Kom in contact met ons</h2>
          <p className="contact-subtitle">
            Heeft u vragen over onze diensten of wilt u een offerte? Wij helpen u graag verder.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="contact-item-label">E-mail</p>
                <a href="mailto:info@tdt-ict.com" className="contact-item-value">info@tdt-ict.com</a>
              <a href="mailto:support@tdt-ict.com" className="contact-item-value" style={{fontSize:'13px', color:'var(--text-light)'}}>support@tdt-ict.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <div>
                <p className="contact-item-label">Telefoon</p>
                <a href="tel:+31499796065" className="contact-item-value">+31 499 796 065</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <p className="contact-item-label">Bereikbaarheid</p>
                <p className="contact-item-value">Ma – Vr: 09:00 – 17:30</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <p className="contact-item-label">Locatie</p>
                <p className="contact-item-value">Boekelingsstraat 29, Aarle-Rixtel</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap">
          {submitted ? (
            <div className="form-success">
              <div className="form-success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3>Bericht verzonden!</h3>
              <p>Bedankt voor uw bericht. Wij nemen zo snel mogelijk contact met u op.</p>
              <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                Nieuw bericht
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Stuur ons een bericht</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Naam *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Uw naam"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="uw@email.nl"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Telefoonnummer</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+31 6 00 000 000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Onderwerp</label>
                  <select id="subject" name="subject" value={form.subject} onChange={handleChange}>
                    <option value="">Selecteer een onderwerp</option>
                    <option value="domeinnamen">Domeinnamen</option>
                    <option value="webhosting">Webhosting</option>
                    <option value="microsoft365">Microsoft 365</option>
                    <option value="internet">Internet verbinding</option>
                    <option value="overig">Overig</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Bericht *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Hoe kunnen wij u helpen?"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary form-submit">
                Bericht verzenden
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3.105 2.289a.75.75 0 0 0-.826.95l1.414 4.925A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.896 28.896 0 0 0 15.293-7.154.75.75 0 0 0 0-1.115A28.897 28.897 0 0 0 3.105 2.289Z" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
