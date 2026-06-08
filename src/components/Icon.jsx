// Simple line icons used by the goals cards. Each is a 24x24 stroked glyph
// inheriting `currentColor`.
const paths = {
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5 13 13l-4.5 2.5L11 11z" />
    </>
  ),
  rocket: (
    <>
      <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2" />
      <path d="M9 15l-3-3c2-6 6-9 11-9 0 5-3 9-9 11z" />
      <circle cx="14.5" cy="9.5" r="1.4" />
    </>
  ),
  spark: <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />,
  broadcast: (
    <>
      <circle cx="12" cy="12" r="2.2" />
      <path d="M8 8a5.5 5.5 0 000 8M16 8a5.5 5.5 0 010 8M5.5 5.5a9 9 0 000 13M18.5 5.5a9 9 0 010 13" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 12h18" />
    </>
  ),
  link: (
    <>
      <path d="M9 12h6" />
      <path d="M10 8H8a4 4 0 100 8h2M14 8h2a4 4 0 110 8h-2" />
    </>
  ),
}

export default function Icon({ name, size = 24, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] || null}
    </svg>
  )
}
