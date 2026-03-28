import { useState, useEffect } from 'react'
import './Header.css'

const navLinks = [
  { href: '#diensten', label: 'Diensten' },
  { href: '#over-ons', label: 'Over ons' },
  { href: '#pakketten', label: 'Pakketten' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#" className="logo" onClick={handleNavClick}>
          <span className="logo-icon">TDT</span>
          <span className="logo-text">ICT</span>
        </a>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link" onClick={handleNavClick}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta" onClick={handleNavClick}>
            Neem contact op
          </a>
        </nav>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu openen"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
