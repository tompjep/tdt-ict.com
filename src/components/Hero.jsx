import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
      </div>
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="hero-badge">Uw ICT-partner in Nederland</span>
          <h1 className="hero-title">
            Professionele <span className="hero-highlight">cloud & hosting</span> oplossingen
          </h1>
          <p className="hero-subtitle">
            TDT-ICT levert betrouwbare diensten voor domeinnamen, webhosting, Microsoft 365 licenties en KPN internet verbindingen. Alles onder één dak.
          </p>
          <div className="hero-actions">
            <a href="#pakketten" className="btn btn-primary">Bekijk pakketten</a>
            <a href="#contact" className="btn btn-outline">Contact opnemen</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">NL</span>
              <span className="stat-label">Datacenters</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
              </svg>
            </div>
            <div className="hero-card-content">
              <p className="hero-card-title">Cloud Hosting</p>
              <p className="hero-card-desc">Snel, veilig &amp; schaalbaar</p>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-icon hero-card-icon--green">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
            <div className="hero-card-content">
              <p className="hero-card-title">Domeinnamen</p>
              <p className="hero-card-desc">Registreer uw domein vandaag</p>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-icon hero-card-icon--orange">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3" />
              </svg>
            </div>
            <div className="hero-card-content">
              <p className="hero-card-title">Microsoft 365</p>
              <p className="hero-card-desc">Licenties voor uw bedrijf</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
