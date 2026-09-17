export default function OrbitRings() {
  return (
    <svg
      className="orbit-rings"
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
    >
      <g className="orbit-spin">
        <circle
          cx="100"
          cy="100"
          r="88"
          stroke="#8b5cf6"
          strokeOpacity="0.3"
          strokeWidth="1.4"
          strokeDasharray="4 10"
        />
        <circle cx="100" cy="12" r="4" fill="#8b5cf6" />
      </g>
      <g className="orbit-spin-reverse">
        <circle
          cx="100"
          cy="100"
          r="60"
          stroke="#3b82f6"
          strokeOpacity="0.35"
          strokeWidth="1.4"
          strokeDasharray="3 8"
        />
        <circle cx="160" cy="100" r="3.4" fill="#3b82f6" />
      </g>
      <circle cx="100" cy="100" r="30" stroke="#8b5cf6" strokeOpacity="0.2" strokeWidth="1" />
    </svg>
  );
}
