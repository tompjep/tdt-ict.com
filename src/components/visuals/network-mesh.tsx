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
  /** Lichte animatie (datapakketjes + pulserende knooppunten). Alleen gebruiken waar het iets toevoegt, bijv. de hero. */
  animated?: boolean;
};

const r1 = (n: number) => Math.round(n * 10) / 10;

export function NetworkMesh({ className, tone = "light", seed = 7, density = 42, animated = false }: NetworkMeshProps) {
  const width = 1200;
  const height = 640;
  const { points, lines } = buildMesh(seed, density, width, height, 230);
  const line = tone === "dark" ? "rgb(197 208 222 / 0.16)" : "rgb(14 43 61 / 0.09)";
  const node = tone === "dark" ? "rgb(197 208 222 / 0.45)" : "rgb(14 43 61 / 0.22)";

  // Alle lijnen en knooppunten als één path: weinig DOM-elementen, kleine HTML
  const linePath = lines.map(([a, b]) => `M${a.x} ${a.y}L${b.x} ${b.y}`).join("");
  const nodePath = points
    .map((p) => `M${r1(p.x - p.r)} ${p.y}a${p.r} ${p.r} 0 1 0 ${p.r * 2} 0a${p.r} ${p.r} 0 1 0 ${-p.r * 2} 0`)
    .join("");
  const packets = animated ? lines.filter((_, i) => i % 17 === 0).slice(0, 6) : [];
  const pulses = animated ? points.filter((_, i) => i % 9 === 4).slice(0, 5) : [];

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    >
      <path d={linePath} stroke={line} strokeWidth="1" fill="none" />
      <path d={nodePath} fill={node} />
      {packets.map(([a, b], i) => (
        <path
          key={i}
          d={`M${a.x} ${a.y}L${b.x} ${b.y}`}
          stroke="#E94E19"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="6 42"
          opacity={tone === "dark" ? 0.75 : 0.55}
          className="animate-dash"
          style={{ animationDelay: `${i * -1}s` }}
        />
      ))}
      {pulses.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={3}
          fill="#E94E19"
          className="animate-pulse-node"
          style={{ transformBox: "fill-box", transformOrigin: "center", animationDelay: `${i * -0.6}s` }}
        />
      ))}
    </svg>
  );
}
