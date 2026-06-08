import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import { site } from '../data.js'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="header__brand" onClick={close} aria-label="مجال — الرئيسية">
          <Logo markSize={34} />
        </a>

        <nav className={`header__nav ${open ? 'is-open' : ''}`}>
          {site.nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={close}>
              {item.label}
            </a>
          ))}
          <a className="btn btn--primary header__cta--mobile" href={site.cta.href} onClick={close}>
            {site.cta.label}
          </a>
        </nav>

        <a className="btn btn--primary header__cta" href={site.cta.href}>
          {site.cta.label}
        </a>

        <button
          className="header__burger"
          aria-label="القائمة"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
