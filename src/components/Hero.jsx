import MajalMark from './MajalMark.jsx'
import { site } from '../data.js'

const stats = [
  { value: '+300', label: 'مستفيد' },
  { value: '6', label: 'مجالات تقنية' },
  { value: '7', label: 'برامج وورش' },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__blocks" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">
            <MajalMark size={26} mono />
            مبادرة مجال التقنية
          </span>
          <h1 className="hero__title">
            نفتح لك <span className="text-teal">آفاق التقنية</span>
          </h1>
          <p className="hero__sub-en">Unlocking your tech horizons</p>
          <p className="hero__intro">{site.intro}</p>

          <div className="hero__actions">
            <a className="btn btn--primary btn--lg" href={site.cta.href}>
              {site.cta.label}
            </a>
            <a className="btn btn--ghost btn--lg" href="#about">
              تعرّف علينا
            </a>
          </div>

          <ul className="hero__stats">
            {stats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__art" aria-hidden="true">
          <div className="hero__mark-wrap">
            <MajalMark size={300} />
          </div>
        </div>
      </div>
    </section>
  )
}
