export default function PlatformIllustration() {
  return (
    <svg
      className="platform-illustration"
      viewBox="0 0 400 300"
      fill="none"
      role="img"
      aria-label="Illustration of Scalwe's layered platform: cloud infrastructure, data and APIs, and an AI core on top"
    >
      <defs>
        <linearGradient id="layerA" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.16" />
        </linearGradient>
        <linearGradient id="coreGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <radialGradient id="coreRadial" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="40" y="216" width="320" height="46" rx="14" fill="url(#layerA)" stroke="#8b5cf6" strokeOpacity="0.35" />
      <text x="60" y="244" fill="#94a3b8" fontSize="13" fontFamily="var(--font-inter), Inter, sans-serif" fontWeight="600">
        Cloud Infrastructure
      </text>

      <rect x="70" y="146" width="260" height="46" rx="14" fill="url(#layerA)" stroke="#8b5cf6" strokeOpacity="0.35" />
      <text x="90" y="174" fill="#94a3b8" fontSize="13" fontFamily="var(--font-inter), Inter, sans-serif" fontWeight="600">
        Data &amp; APIs
      </text>

      <rect x="100" y="76" width="200" height="46" rx="14" fill="url(#layerA)" stroke="#3b82f6" strokeOpacity="0.5" />
      <text x="120" y="104" fill="#ffffff" fontSize="13" fontFamily="var(--font-inter), Inter, sans-serif" fontWeight="700">
        AI Models
      </text>

      <line x1="200" y1="216" x2="200" y2="192" stroke="#8b5cf6" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="4 5" className="flow-line" />
      <line x1="200" y1="146" x2="200" y2="122" stroke="#3b82f6" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="4 5" className="flow-line" />

      <circle cx="200" cy="52" r="30" fill="url(#coreRadial)" className="core-pulse" />
      <circle cx="200" cy="52" r="14" fill="url(#coreGlow)" />

      <g className="orbit-node orbit-node-1">
        <circle cx="90" cy="40" r="5" fill="#8b5cf6" />
      </g>
      <g className="orbit-node orbit-node-2">
        <circle cx="320" cy="60" r="4" fill="#3b82f6" />
      </g>
      <g className="orbit-node orbit-node-3">
        <circle cx="60" cy="200" r="4" fill="#8b5cf6" />
      </g>
      <g className="orbit-node orbit-node-4">
        <circle cx="345" cy="230" r="5" fill="#3b82f6" />
      </g>

      <path
        d="M90 40 C130 20, 170 20, 190 40"
        stroke="#8b5cf6"
        strokeOpacity="0.25"
        strokeWidth="1.4"
        fill="none"
      />
      <path
        d="M320 60 C280 30, 240 30, 214 44"
        stroke="#3b82f6"
        strokeOpacity="0.25"
        strokeWidth="1.4"
        fill="none"
      />
    </svg>
  );
}
