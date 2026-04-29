import { useId } from "react";

export type TextilePatternTone = "light" | "ornament";

export type TextilePatternProps = {
  tone?: TextilePatternTone;
  opacity?: number;
  className?: string;
  ariaHidden?: boolean;
  viewBox?: string;
};

const TILE = 64;
const RECTS: ReadonlyArray<readonly [number, number, number, number]> = [
  [0, 0, 64, 4],
  [0, 60, 64, 4],
  [0, 4, 4, 56],
  [60, 4, 4, 56],
  [8, 8, 48, 4],
  [8, 52, 48, 4],
  [8, 12, 4, 40],
  [52, 12, 4, 40],
  [16, 16, 32, 4],
  [16, 44, 32, 4],
  [16, 20, 4, 24],
  [44, 20, 4, 24],
  [28, 24, 8, 16],
  [24, 28, 16, 8],
];

export function TextilePattern({
  tone = "light",
  opacity,
  className,
  ariaHidden = true,
  viewBox,
}: TextilePatternProps) {
  const reactId = useId();
  const patternId = `coptic-stepfret-${reactId.replace(/:/g, "")}`;
  const isOrnament = tone === "ornament";
  const lineFill = isOrnament ? "var(--ochre)" : "var(--ink)";
  const groundFill = isOrnament ? "var(--ink)" : "transparent";
  const resolvedOpacity = opacity ?? (isOrnament ? 1 : 0.05);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={viewBox}
      shapeRendering="crispEdges"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden={ariaHidden}
      focusable="false"
      className={["textile-pattern", className].filter(Boolean).join(" ")}
      style={{ opacity: resolvedOpacity }}
    >
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width={TILE}
          height={TILE}
          patternUnits="userSpaceOnUse"
        >
          {isOrnament ? <rect width={TILE} height={TILE} fill={groundFill} /> : null}
          {RECTS.map(([x, y, w, h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} fill={lineFill} />
          ))}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
