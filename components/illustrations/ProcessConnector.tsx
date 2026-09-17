const nodes = [125, 375, 625, 875];

export default function ProcessConnector() {
  return (
    <svg
      className="process-connector"
      viewBox="0 0 1000 40"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <line
        x1="125"
        y1="20"
        x2="875"
        y2="20"
        stroke="#8b5cf6"
        strokeOpacity="0.25"
        strokeWidth="2"
        strokeDasharray="6 8"
      />
      {nodes.map((x, i) => (
        <circle
          key={x}
          className="connector-node"
          style={{ animationDelay: `${i * 0.4}s` }}
          cx={x}
          cy="20"
          r="7"
          fill="#1a1836"
          stroke={i % 2 === 0 ? "#8b5cf6" : "#3b82f6"}
          strokeWidth="2"
        />
      ))}
      <circle className="connector-runner" cx="125" cy="20" r="5" fill="#3b82f6" />
    </svg>
  );
}
