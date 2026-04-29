import type { SVGProps } from "react";
import { useId } from "react";

export function TextilePattern({ className, ...props }: SVGProps<SVGSVGElement>) {
  const reactId = useId();
  const patternId = `textile-${reactId.replace(/:/g, "")}`;

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
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="square"
            strokeLinejoin="miter"
          >
            <path d="M0 40 L20 40 L20 20 L40 20 L40 0" />
            <path d="M40 0 L40 20 L60 20 L60 40 L80 40" />
            <path d="M0 40 L20 40 L20 60 L40 60 L40 80" />
            <path d="M80 40 L60 40 L60 60 L40 60 L40 80" />
            <path d="M40 32 L48 40 L40 48 L32 40 Z" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
