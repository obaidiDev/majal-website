import Logo from './Logo.jsx'
import { site } from '../data.js'

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)
const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
  </svg>
)
const LinkIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M10 13a5 5 0 007 0l2-2a5 5 0 00-7-7l-1 1" />
    <path d="M14 11a5 5 0 00-7 0l-2 2a5 5 0 007 7l1-1" />
  </svg>
)
const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export default function Footer() {
  const { links } = site
  return (
    <footer className="footer">
      <div className="footer__cta">
        <div className="container footer__cta-inner">
          <div>
            <h2>جاهز تكتشف مجالك؟</h2>
            <p>انضمّ إلى مجتمع مجال وكن أول من يعرف عن البرامج والورش القادمة.</p>
          </div>
          <a className="btn btn--yellow btn--lg" href={site.cta.href}>
            {site.cta.label}
          </a>
        </div>
      </div>

      <div className="container footer__main">
        <div className="footer__brand">
          <Logo markSize={40} mono />
          <p className="footer__tagline">
            {site.tagline} — <span dir="ltr">{site.taglineEn}</span>
          </p>
        </div>

        <nav className="footer__links" aria-label="روابط مجال">
          {links.website && (
            <a href={links.website} target="_blank" rel="noopener noreferrer">
              <GlobeIcon /> الموقع الإلكتروني
            </a>
          )}
          {links.instagram && (
            <a href={links.instagram} target="_blank" rel="noopener noreferrer">
              <InstagramIcon /> إنستقرام
            </a>
          )}
          {links.linktree && (
            <a href={links.linktree} target="_blank" rel="noopener noreferrer">
              <LinkIcon /> لينكتري
            </a>
          )}
          {links.email && (
            <a href={`mailto:${links.email}`}>
              <MailIcon /> البريد الإلكتروني
            </a>
          )}
        </nav>
      </div>

      <div className="footer__bar">
        <div className="container">
          <span>© {toArabic(new Date().getFullYear())} مبادرة مجال. جميع الحقوق محفوظة.</span>
        </div>
      </div>
    </footer>
  )
}

function toArabic(n) {
  return String(n).replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d])
}
