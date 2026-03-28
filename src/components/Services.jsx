import './Services.css'

const services = [
  {
    id: 'domeinnamen',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    color: 'blue',
    title: 'Domeinnamen',
    description: 'Registreer uw perfecte domeinnaam snel en eenvoudig. Wij ondersteunen alle populaire extensies zoals .nl, .com, .eu, .net en meer.',
    features: ['Alle populaire extensies', 'Automatische verlenging', 'WHOIS-privacy bescherming', 'DNS-beheer inbegrepen'],
  },
  {
    id: 'webhosting',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
    color: 'purple',
    title: 'Webhosting',
    description: 'Betrouwbare webhosting met Nederlandse servers, hoge snelheid en eenvoudig beheer via cPanel of Plesk. Voor elke website de juiste oplossing.',
    features: ['Nederlandse datacenter', '99.9% uptime garantie', 'Gratis SSL certificaat', 'Dagelijkse back-ups'],
  },
  {
    id: 'microsoft365',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3" />
      </svg>
    ),
    color: 'orange',
    title: 'Microsoft 365',
    description: 'Professionele Microsoft 365 licenties voor uw bedrijf. Van Outlook en Teams tot Word, Excel en SharePoint. Wij helpen met implementatie en beheer.',
    features: ['Business Basic t/m E5', 'Outlook & Exchange', 'Teams & SharePoint', 'Persoonlijke ondersteuning'],
  },
  {
    id: 'internet',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
      </svg>
    ),
    color: 'green',
    title: 'KPN Internet',
    description: 'Snelle en betrouwbare internetverbindingen via het KPN netwerk. Fiber, DSL en zakelijke verbindingen met hoge snelheden en SLA garanties.',
    features: ['KPN glasvezel & DSL', 'Zakelijke SLA', 'Symmetrische verbindingen', 'Vaste IP-adressen'],
  },
]

const colorMap = {
  blue: { bg: '#eff6ff', text: '#1d4ed8', border: '#bfdbfe' },
  purple: { bg: '#faf5ff', text: '#7c3aed', border: '#ddd6fe' },
  orange: { bg: '#fff7ed', text: '#c2410c', border: '#fed7aa' },
  green: { bg: '#f0fdf4', text: '#15803d', border: '#bbf7d0' },
}

export default function Services() {
  return (
    <section id="diensten" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Onze diensten</span>
          <h2 className="section-title">Alles wat uw bedrijf nodig heeft</h2>
          <p className="section-subtitle">
            Van domeinnaam tot volledige Microsoft 365 implementatie — wij zijn uw complete ICT-partner.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const colors = colorMap[service.color]
            return (
              <div key={service.id} className="service-card">
                <div
                  className="service-icon"
                  style={{ background: colors.bg, color: colors.text, borderColor: colors.border }}
                >
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((f) => (
                    <li key={f}>
                      <svg viewBox="0 0 20 20" fill="currentColor" className="check-icon">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="service-cta">
                  Meer informatie
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
