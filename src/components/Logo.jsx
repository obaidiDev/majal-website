import MajalMark from './MajalMark.jsx'

// Full lockup: Arabic wordmark + Latin "MAJAL" beside the symbol.
export default function Logo({ markSize = 40, mono = false }) {
  return (
    <span className={`logo ${mono ? 'logo--mono' : ''}`}>
      <span className="logo__words">
        <span className="logo__ar">مجال</span>
        <span className="logo__en">MAJAL</span>
      </span>
      <MajalMark size={markSize} mono={mono} />
    </span>
  )
}
