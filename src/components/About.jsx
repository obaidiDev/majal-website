import { goals } from '../data.js'

export default function About() {
  const { problem, solution, beneficiaries } = goals
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section__head">
          <span className="section__kicker">عن مجال</span>
          <h2 className="section__title">من الحيرة إلى القرار</h2>
        </div>

        <div className="about__grid">
          <article className="card card--problem">
            <span className="card__tag">المشكلة</span>
            <h3>{problem.title}</h3>
            <p>{problem.body}</p>
          </article>

          <article className="card card--solution">
            <span className="card__tag card__tag--light">الحل</span>
            <h3>{solution.title}</h3>
            <p>{solution.body}</p>
          </article>
        </div>

        <div className="about__beneficiaries">
          <h3>{beneficiaries.title}</h3>
          <p>{beneficiaries.body}</p>
        </div>
      </div>
    </section>
  )
}
