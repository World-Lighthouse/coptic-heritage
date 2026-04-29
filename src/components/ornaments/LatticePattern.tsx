import type { SVGProps } from "react";
import { useId } from "react";

export function LatticePattern({ className, ...props }: SVGProps<SVGSVGElement>) {
  const reactId = useId();
  const patternId = `lattice-${reactId.replace(/:/g, "")}`;

  return (
    <svg
      width="100%"
      height="100%"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
      className={["textile-pattern", className].filter(Boolean).join(" ")}
      {...props}
    >
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width="56"
          height="56"
          patternUnits="userSpaceOnUse"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="square"
            strokeLinejoin="miter"
          >
            <path d="M0 0 L56 0 L56 56 L0 56 Z" />
            <path d="M32 8 L48 8 L48 48 L8 48 L8 8 L24 8" />
            <path d="M24 16 L32 16 L32 24 L40 24 L40 32 L32 32 L32 40 L24 40 L24 32 L16 32 L16 24 L24 24 Z" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
