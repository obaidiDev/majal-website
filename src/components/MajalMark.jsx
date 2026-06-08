// The Majal symbol: four arrows radiating toward the corners — echoing the
// brand mark ("أسهم متقابلة تشكّل في مجموعها مربعًا") that stands for movement,
// launch and expanding horizons. Colours follow the teal + petrol-blue identity.
export default function MajalMark({ size = 48, className = '', mono = false }) {
  const teal = mono ? 'currentColor' : 'var(--teal)'
  const navy = mono ? 'currentColor' : 'var(--navy)'
  // One arrow pointing "up" with its tail near the centre; rotated to the
  // four diagonals so the heads land in the four corners.
  const arrow = (rotation, color, key) => (
    <g key={key} transform={`rotate(${rotation} 32 32)`}>
      <path
        d="M32 40 V11 M32 11 L24 19 M32 11 L40 19"
        fill="none"
        stroke={color}
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  )
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="شعار مجال"
      className={className}
    >
      {arrow(45, teal, 'a')}
      {arrow(135, navy, 'b')}
      {arrow(225, teal, 'c')}
      {arrow(315, navy, 'd')}
    </svg>
  )
}
