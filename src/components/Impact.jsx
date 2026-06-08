import { impact } from '../data.js'

const colorVar = { teal: 'var(--teal)', navy: 'var(--navy)', gray: 'var(--gray)' }

export default function Impact() {
  const { headline, decision, fields, highlights } = impact
  return (
    <section className="section section--dark" id="impact">
      <div className="container">
        <div className="section__head section__head--light">
          <span className="section__kicker">الأثر والفعالية</span>
          <h2 className="section__title">أرقام تثبت أن التجربة تصنع القرار</h2>
        </div>

        <div className="stats-row">
          {headline.map((s) => (
            <div className="stat" key={s.label}>
              <strong className="stat__value">{s.value}</strong>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="impact__panels">
          <div className="panel panel--decision">
            <h3>{decision.title}</h3>
            <div className="stacked-bar" role="img" aria-label="توزيع قرارات المشاركين">
              {decision.segments.map((seg) => (
                <span
                  key={seg.label}
                  className="stacked-bar__seg"
                  style={{ width: `${seg.value}%`, background: colorVar[seg.color] }}
                />
              ))}
            </div>
            <ul className="legend">
              {decision.segments.map((seg) => (
                <li key={seg.label}>
                  <span className="legend__dot" style={{ background: colorVar[seg.color] }} />
                  <span className="legend__label">{seg.label}</span>
                  <span className="legend__val">{toArabic(seg.value)}٪</span>
                </li>
              ))}
            </ul>
            <p className="panel__note">{decision.summary}</p>
            <p className="panel__source">{decision.note}</p>
          </div>

          <div className="panel panel--fields">
            <h3>رضا المستفيدين حسب المجال</h3>
            <ul className="fields-list">
              {fields.map((f) => (
                <li key={f.name} className="field-row">
                  <div className="field-row__top">
                    <span className="field-row__name">{f.name}</span>
                    <span className="field-row__meta">{toArabic(f.responses)} استجابة</span>
                  </div>
                  <div className="field-row__bar">
                    <span style={{ width: `${(f.helped / 5) * 100}%` }} />
                  </div>
                  <div className="field-row__labels">
                    <span>ساعدتني على الحسم: {toArabic(f.helped)} / ٥</span>
                    <span>حسموا قرارهم: {toArabic(f.decidedPct)}٪</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="highlights">
          {highlights.map((h) => (
            <div className="highlight" key={h.label}>
              <strong>{h.value}</strong>
              <p>{h.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function toArabic(n) {
  return String(n).replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d])
}
