import './About.css'

const reasons = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    title: 'Nederlands bedrijf',
    desc: 'Wij zijn een Nederlands ICT-bedrijf met servers in Nederland. Uw data blijft in de EU.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: 'Persoonlijke support',
    desc: 'Bereik ons altijd per telefoon, e-mail of chat. Geen wachtrij, geen callcenter.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: 'Veilig & betrouwbaar',
    desc: 'ISO-gecertificeerde datacenters, dagelijkse back-ups en geavanceerde DDoS-bescherming.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Snelle implementatie',
    desc: 'Uw hosting is binnen minuten actief. Wij zorgen voor een vlekkeloze migratie van uw bestaande site.',
  },
]

export default function About() {
  return (
    <section id="over-ons" className="about">
      <div className="container about-inner">
        <div className="about-content">
          <span className="section-label">Over TDT-ICT</span>
          <h2 className="about-title">Uw betrouwbare ICT-partner</h2>
          <p className="about-text">
            TDT-ICT is een toonaangevend Nederlands ICT-bedrijf dat zich specialiseert in het leveren van hoogwaardige cloud- en hostingoplossingen voor bedrijven van alle groottes.
          </p>
          <p className="about-text">
            Wij bieden een volledig pakket aan ICT-diensten, van domeinnamen en webhosting tot Microsoft 365 licenties en zakelijke KPN internetverbindingen. Alles wat uw bedrijf nodig heeft voor een optimale digitale infrastructuur.
          </p>
          <div className="about-badges">
            <span className="badge">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /></svg>
              Microsoft Partner
            </span>
            <span className="badge">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /></svg>
              KPN Reseller
            </span>
            <span className="badge">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /></svg>
              AVG-compliant
            </span>
          </div>
        </div>

        <div className="about-reasons">
          {reasons.map((r) => (
            <div key={r.title} className="reason">
              <div className="reason-icon">{r.icon}</div>
              <div>
                <h4 className="reason-title">{r.title}</h4>
                <p className="reason-desc">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
