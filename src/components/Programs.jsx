import { programs } from '../data.js'

function ProgramCard({ p, kind }) {
  return (
    <article className={`program-card program-card--${kind}`}>
      <div className="program-card__head">
        <h4>{p.field}</h4>
        <span className="program-card__count">{toArabic(p.attendees)} مشارك</span>
      </div>
      <dl className="program-card__meta">
        <div>
          <dt>المكان</dt>
          <dd>{p.venue}</dd>
        </div>
        <div>
          <dt>التاريخ</dt>
          <dd>{p.dateText}</dd>
        </div>
        <div>
          <dt>المشرف</dt>
          <dd>{p.lead}</dd>
        </div>
        {p.trainers && (
          <div>
            <dt>المدرّبون</dt>
            <dd>{p.trainers.join('، ')}</dd>
          </div>
        )}
      </dl>
    </article>
  )
}

export default function Programs() {
  const { summer2025, workshops, upcoming } = programs
  return (
    <section className="section" id="programs">
      <div className="container">
        <div className="section__head">
          <span className="section__kicker">البرامج والإنجازات</span>
          <h2 className="section__title">ما الذي قدّمناه</h2>
        </div>

        <div className="program-block">
          <div className="program-block__head">
            <h3>{summer2025.title}</h3>
            <p>{summer2025.subtitle}</p>
          </div>
          <div className="program-grid">
            {summer2025.tracks.map((t) => (
              <ProgramCard key={t.field} p={t} kind="summer" />
            ))}
          </div>
        </div>

        <div className="program-block">
          <div className="program-block__head">
            <h3>{workshops.title}</h3>
            <p>{workshops.subtitle}</p>
          </div>
          <div className="program-grid">
            {workshops.items.map((w) => (
              <ProgramCard key={w.field} p={w} kind="workshop" />
            ))}
          </div>
        </div>

        <div className="upcoming">
          <span className="upcoming__badge">{upcoming.badge}</span>
          <h3>{upcoming.title}</h3>
          <p className="upcoming__date">{upcoming.dateText}</p>
          <p className="upcoming__body">{upcoming.body}</p>
          <ul className="upcoming__fields">
            {upcoming.fields.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function toArabic(n) {
  return String(n).replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d])
}
