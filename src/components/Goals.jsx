import Icon from './Icon.jsx'
import { goals } from '../data.js'

export default function Goals() {
  return (
    <section className="section section--tinted" id="goals">
      <div className="container">
        <div className="section__head">
          <span className="section__kicker">أهدافنا</span>
          <h2 className="section__title">ما الذي نسعى إليه</h2>
        </div>

        <div className="goals__grid">
          {goals.goals.map((g) => (
            <article className="goal-card" key={g.title}>
              <span className="goal-card__icon">
                <Icon name={g.icon} size={26} />
              </span>
              <h3>{g.title}</h3>
              <p>{g.body}</p>
            </article>
          ))}
        </div>

        <div className="vision">
          <div className="vision__head">
            <h3>{goals.vision.title}</h3>
          </div>
          <ul className="vision__list">
            {goals.vision.items.map((item, i) => (
              <li key={i}>
                <span className="vision__num">{toArabic(i + 1)}</span>
                <span>{item}</span>
              </li>
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
