const devices = {
  ai: (gradId) => (
    <g>
      <path d="M128 150 L202 150 L193 170 L120 170 Z" fill={`url(#${gradId})`} />
      <rect x="128" y="122" width="62" height="28" rx="4" fill="#131129" stroke="#8b5cf6" strokeOpacity="0.6" />
      <circle cx="159" cy="136" r="7" fill="#3b82f6" className="scene-pulse" />
      <path
        d="M159 122v-8M159 152v8M136 136h-8M182 136h8"
        stroke="#3b82f6"
        strokeOpacity="0.5"
        strokeWidth="1.4"
      />
    </g>
  ),
  web: (gradId) => (
    <g>
      <rect x="118" y="104" width="76" height="50" rx="5" fill="#131129" stroke="#8b5cf6" strokeOpacity="0.6" />
      <rect x="126" y="112" width="60" height="7" rx="2" fill={`url(#${gradId})`} opacity="0.7" />
      <rect x="126" y="124" width="42" height="6" rx="2" fill="#8b5cf6" opacity="0.4" />
      <rect x="126" y="134" width="52" height="6" rx="2" fill="#3b82f6" opacity="0.35" />
      <rect x="126" y="144" width="34" height="6" rx="2" fill="#8b5cf6" opacity="0.3" />
      <rect x="149" y="154" width="14" height="12" fill="#131129" />
      <rect x="140" y="166" width="32" height="4" rx="2" fill="#131129" stroke="#8b5cf6" strokeOpacity="0.4" />
    </g>
  ),
  mobile: (gradId) => (
    <g>
      <rect x="148" y="92" width="36" height="66" rx="9" fill="#131129" stroke="#3b82f6" strokeOpacity="0.6" />
      <rect x="154" y="102" width="24" height="42" rx="2" fill={`url(#${gradId})`} opacity="0.35" />
      <rect x="154" y="106" width="18" height="5" rx="1.5" fill="#3b82f6" opacity="0.7" />
      <rect x="154" y="116" width="14" height="4" rx="1.5" fill="#8b5cf6" opacity="0.6" />
      <rect x="154" y="124" width="20" height="4" rx="1.5" fill="#8b5cf6" opacity="0.5" />
      <circle cx="166" cy="150" r="2.4" fill="#3b82f6" />
    </g>
  ),
  cloud: (gradId) => (
    <g>
      <rect x="150" y="92" width="52" height="74" rx="5" fill="#131129" stroke="#8b5cf6" strokeOpacity="0.6" />
      <rect x="158" y="102" width="36" height="9" rx="2" fill="#8b5cf6" opacity="0.5" />
      <rect x="158" y="117" width="36" height="9" rx="2" fill="#3b82f6" opacity="0.5" />
      <rect x="158" y="132" width="36" height="9" rx="2" fill="#8b5cf6" opacity="0.3" />
      <rect x="158" y="147" width="36" height="9" rx="2" fill="#3b82f6" opacity="0.3" />
      <circle cx="194" cy="106" r="2.4" fill="#3b82f6" className="scene-pulse" />
      <path
        d="M110 70 a10 10 0 0 1 0 -20 a13 13 0 0 1 25 -6 a10 10 0 0 1 3 20 z"
        fill="none"
        stroke="#3b82f6"
        strokeOpacity="0.4"
        strokeWidth="1.6"
      />
    </g>
  ),
};

export default function WorkScene({ variant = "ai" }) {
  const gradId = `work-grad-${variant}`;
  const renderDevice = devices[variant] || devices.ai;

  return (
    <svg
      className="work-scene"
      viewBox="0 0 300 220"
      fill="none"
      role="img"
      aria-label="Illustration of a person working with technology"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>

      <g opacity="0.3">
        <circle cx="22" cy="34" r="2" fill="#8b5cf6" />
        <circle cx="276" cy="46" r="2" fill="#3b82f6" />
        <circle cx="34" cy="186" r="2" fill="#8b5cf6" />
        <circle cx="264" cy="176" r="2" fill="#3b82f6" />
        <path d="M22 34 L22 62 L52 62" stroke="#8b5cf6" strokeWidth="1" fill="none" />
        <path d="M276 46 L276 86 L244 86" stroke="#3b82f6" strokeWidth="1" fill="none" />
      </g>

      <ellipse cx="150" cy="196" rx="118" ry="9" fill="#000" opacity="0.22" />

      <rect x="60" y="164" width="180" height="9" rx="3" fill="#131129" stroke="#8b5cf6" strokeOpacity="0.3" />
      <rect x="72" y="173" width="7" height="22" fill="#131129" />
      <rect x="221" y="173" width="7" height="22" fill="#131129" />

      <circle cx="108" cy="112" r="15" fill="#8b5cf6" fillOpacity="0.85" />
      <path d="M83 164 C83 136, 133 136, 133 164 Z" fill="#8b5cf6" fillOpacity="0.65" />

      {renderDevice(gradId)}
    </svg>
  );
}
