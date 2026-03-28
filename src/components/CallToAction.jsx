import './CallToAction.css'

export default function CallToAction() {
  return (
    <section className="cta">
      <div className="container cta-inner">
        <div className="cta-content">
          <h2 className="cta-title">Klaar om te beginnen?</h2>
          <p className="cta-text">
            Neem vandaag nog contact op en ontdek hoe TDT-ICT uw digitale infrastructuur kan versterken.
          </p>
        </div>
        <div className="cta-actions">
          <a href="#pakketten" className="btn btn-white">Bekijk pakketten</a>
          <a href="#contact" className="btn btn-outline-white">Contact opnemen</a>
        </div>
      </div>
    </section>
  )
}
