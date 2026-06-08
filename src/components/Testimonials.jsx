import { testimonials } from '../data.js'

export default function Testimonials() {
  return (
    <section className="section section--tinted" id="voices">
      <div className="container">
        <div className="section__head">
          <span className="section__kicker">آراء المستفيدين</span>
          <h2 className="section__title">ماذا قالوا عن مجال</h2>
        </div>

        <div className="quotes">
          {testimonials.items.map((t, i) => (
            <figure className="quote" key={i}>
              <span className="quote__mark" aria-hidden="true">”</span>
              <blockquote>{t.quote}</blockquote>
              <figcaption>{t.field}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
