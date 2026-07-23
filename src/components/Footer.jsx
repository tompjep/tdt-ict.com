import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#" className="logo">
            <span className="logo-icon">TDT</span>
            <span className="logo-text">ICT</span>
          </a>
          <p className="footer-tagline">
            Uw betrouwbare partner voor cloud, hosting en ICT-oplossingen in Nederland.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Diensten</h4>
            <ul>
              <li><a href="#diensten">Domeinnamen</a></li>
              <li><a href="#diensten">Webhosting</a></li>
              <li><a href="#diensten">Microsoft 365</a></li>
              <li><a href="#diensten">KPN Internet</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Bedrijf</h4>
            <ul>
              <li><a href="#over-ons">Over ons</a></li>
              <li><a href="#pakketten">Pakketten</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:info@tdt-ict.com">info@tdt-ict.com</a></li>
              <li><a href="mailto:support@tdt-ict.com">support@tdt-ict.com</a></li>
              <li><a href="tel:+31499796065">+31 499 796 065</a></li>
              <li>Boekelingsstraat 29, Aarle-Rixtel</li>
              <li>Ma – Vr: 09:00 – 17:30</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-partners">
        <div className="container">
          <p className="footer-partners-label">Onze partners</p>
          <div className="footer-partners-list">
            <span>Alta Labs</span>
            <span>Fortinet</span>
            <span>KPN</span>
            <span>Microsoft</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {year} TDT-ICT. Alle rechten voorbehouden.</p>
          <div className="footer-legal">
            <a href="#">Privacybeleid</a>
            <a href="#">Algemene voorwaarden</a>
            <a href="#">Cookie-instellingen</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
