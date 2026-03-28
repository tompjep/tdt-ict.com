import './Pricing.css'

const plans = [
  {
    name: 'Starter',
    desc: 'Perfect voor kleine websites en starters',
    price: '4,99',
    period: 'per maand',
    highlight: false,
    features: [
      '1 website',
      '10 GB SSD opslag',
      '5 e-mailadressen',
      'Gratis SSL certificaat',
      '1 domeinnaam inbegrepen',
      'cPanel beheer',
    ],
    cta: 'Begin nu',
  },
  {
    name: 'Business',
    desc: 'Ideaal voor groeiende bedrijven',
    price: '9,99',
    period: 'per maand',
    highlight: true,
    badge: 'Meest gekozen',
    features: [
      '5 websites',
      '50 GB SSD opslag',
      'Onbeperkte e-mailadressen',
      'Gratis SSL certificaat',
      '3 domeinnamen inbegrepen',
      'WordPress pre-installed',
      'Dagelijkse back-ups',
      'Prioriteit support',
    ],
    cta: 'Start Business',
  },
  {
    name: 'Professional',
    desc: 'Voor intensieve websites en webshops',
    price: '19,99',
    period: 'per maand',
    highlight: false,
    features: [
      'Onbeperkte websites',
      '200 GB SSD opslag',
      'Onbeperkte e-mailadressen',
      'Gratis SSL certificaat',
      '10 domeinnamen inbegrepen',
      'Dedicated resources',
      'Uurlijkse back-ups',
      '24/7 premium support',
      'Staging omgeving',
    ],
    cta: 'Kies Professional',
  },
]

export default function Pricing() {
  return (
    <section id="pakketten" className="pricing">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Pakketten</span>
          <h2 className="section-title">Transparante prijzen, geen verrassingen</h2>
          <p className="section-subtitle">
            Kies het pakket dat bij uw bedrijf past. Alle pakketten inclusief gratis SSL en Nederlandse hosting.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div key={plan.name} className={`pricing-card ${plan.highlight ? 'pricing-card--highlight' : ''}`}>
              {plan.badge && <span className="pricing-badge">{plan.badge}</span>}
              <div className="pricing-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-desc">{plan.desc}</p>
                <div className="plan-price">
                  <span className="price-currency">€</span>
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                </div>
              </div>
              <ul className="plan-features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <svg viewBox="0 0 20 20" fill="currentColor" className="check-icon">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${plan.highlight ? 'btn-white' : 'btn-primary'} pricing-btn`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="pricing-note">
          Alle prijzen zijn exclusief BTW. Heeft u specifieke wensen? <a href="#contact">Neem contact op</a> voor een maatwerkofferte.
        </p>
      </div>
    </section>
  )
}
