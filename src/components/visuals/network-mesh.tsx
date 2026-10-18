import { cn } from "@/lib/utils";

/**
 * Terugkerend merkmotief: een netwerk van knooppunten en lijnen (afgeleid van het logo-icoon).
 * Pure SVG + CSS-animaties: geen JavaScript nodig, en stil bij prefers-reduced-motion.
 */

type Point = { x: number; y: number; r: number };

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildMesh(seed: number, count: number, width: number, height: number, maxDist: number) {
  const rand = mulberry32(seed);
  const cols = Math.ceil(Math.sqrt((count * width) / height));
  const rows = Math.ceil(count / cols);
  const points: Point[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cw = width / cols;
      const ch = height / rows;
      points.push({
        x: Math.round(col * cw + cw * (0.15 + rand() * 0.7)),
        y: Math.round(row * ch + ch * (0.15 + rand() * 0.7)),
        r: rand() > 0.82 ? 3.5 : 2,
      });
    }
  }
  const lines: [Point, Point][] = [];
  points.forEach((a, i) => {
    points
      .slice(i + 1)
      .map((b) => ({ b, d: Math.hypot(a.x - b.x, a.y - b.y) }))
      .filter(({ d }) => d < maxDist)
      .sort((p, q) => p.d - q.d)
      .slice(0, 3)
      .forEach(({ b }) => lines.push([a, b]));
  });
  return { points, lines };
}

type NetworkMeshProps = {
  className?: string;
  tone?: "light" | "dark";
  seed?: number;
  density?: number;
  animated?: boolean;
};

export function NetworkMesh({ className, tone = "light", seed = 7, density = 42, animated = true }: NetworkMeshProps) {
  const width = 1200;
  const height = 640;
  const { points, lines } = buildMesh(seed, density, width, height, 230);
  const line = tone === "dark" ? "rgb(197 208 222 / 0.16)" : "rgb(14 43 61 / 0.09)";
  const node = tone === "dark" ? "rgb(197 208 222 / 0.45)" : "rgb(14 43 61 / 0.22)";

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    >
      <g stroke={line} strokeWidth="1">
        {lines.map(([a, b], i) => (
          <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
        ))}
      </g>
      {animated && (
        <g stroke="#E94E19" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="6 42" opacity={tone === "dark" ? 0.75 : 0.55}>
          {lines
            .filter((_, i) => i % 9 === 0)
            .map(([a, b], i) => (
              <line
                key={i}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                className="animate-dash"
                style={{ animationDelay: `${(i % 6) * -1}s` }}
              />
            ))}
        </g>
      )}
      <g fill={node}>
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={p.r} />
        ))}
      </g>
      {animated && (
        <g fill="#E94E19">
          {points
            .filter((_, i) => i % 7 === 3)
            .map((p, i) => (
              <circle
                key={i}
                cx={p.x}
                cy={p.y}
                r={3}
                className="animate-pulse-node"
                style={{ transformBox: "fill-box", transformOrigin: "center", animationDelay: `${i * -0.6}s` }}
              />
            ))}
        </g>
      )}
    </svg>
  );
}
