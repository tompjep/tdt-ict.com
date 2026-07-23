import './Partners.css'

const partners = [
  {
    name: 'Alta Labs',
    logo: (
      <svg viewBox="0 0 140 48" xmlns="http://www.w3.org/2000/svg" aria-label="Alta Labs">
        <rect x="1" y="4" width="40" height="40" rx="3" fill="none" stroke="#111" strokeWidth="2.5"/>
        <text x="21" y="30" textAnchor="middle" fontFamily="Georgia, serif" fontSize="22" fontWeight="700" fill="#111">A</text>
        <text x="54" y="19" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" letterSpacing="2" fill="#111">ALTA</text>
        <text x="54" y="34" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" letterSpacing="2" fill="#111">LABS</text>
      </svg>
    ),
  },
  {
    name: 'Fortinet',
    logo: (
      <svg viewBox="0 0 160 48" xmlns="http://www.w3.org/2000/svg" aria-label="Fortinet">
        {/* F-shield mark */}
        <path d="M8 6 L8 42 L22 42 L22 28 L34 28 L34 20 L22 20 L22 16 L36 16 L36 8 L8 6Z" fill="#EE3124"/>
        <text x="44" y="32" fontFamily="system-ui, Arial, sans-serif" fontSize="20" fontWeight="800" fill="#EE3124" letterSpacing="-0.5">FORTINET</text>
      </svg>
    ),
  },
  {
    name: 'KPN',
    logo: (
      <svg viewBox="0 0 110 48" xmlns="http://www.w3.org/2000/svg" aria-label="KPN">
        {/* KPN green circle with leaf signal */}
        <circle cx="24" cy="24" r="22" fill="#009900"/>
        <path d="M16 32 C16 20 24 14 32 18 C28 20 26 26 28 32Z" fill="white" opacity="0.95"/>
        <path d="M24 32 C22 22 28 16 36 18 C34 22 32 28 32 32Z" fill="white" opacity="0.7"/>
        <text x="54" y="31" fontFamily="system-ui, Arial, sans-serif" fontSize="24" fontWeight="800" fill="#009900" letterSpacing="1">KPN</text>
      </svg>
    ),
  },
  {
    name: 'Microsoft',
    logo: (
      <svg viewBox="0 0 160 48" xmlns="http://www.w3.org/2000/svg" aria-label="Microsoft">
        {/* 4-color squares */}
        <rect x="2" y="6" width="17" height="17" fill="#F25022"/>
        <rect x="21" y="6" width="17" height="17" fill="#7FBA00"/>
        <rect x="2" y="25" width="17" height="17" fill="#00A4EF"/>
        <rect x="21" y="25" width="17" height="17" fill="#FFB900"/>
        <text x="48" y="31" fontFamily="system-ui, 'Segoe UI', sans-serif" fontSize="17" fontWeight="300" fill="#737373" letterSpacing="-0.2">Microsoft</text>
      </svg>
    ),
  },
]

export default function Partners() {
  return (
    <section className="partners">
      <div className="container">
        <p className="partners-label">Onze partners</p>
        <div className="partners-grid">
          {partners.map((p) => (
            <div key={p.name} className="partner-logo" title={p.name}>
              {p.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
