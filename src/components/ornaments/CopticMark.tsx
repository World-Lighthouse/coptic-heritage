import type { SVGProps } from "react";

export function CopticMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M15 12 L13.5 5 L18.5 5 L17 12" />
      <path d="M15 20 L13.5 27 L18.5 27 L17 20" />
      <path d="M12 15 L5 13.5 L5 18.5 L12 17" />
      <path d="M20 15 L27 13.5 L27 18.5 L20 17" />
      <circle cx="16" cy="16" r="2.5" />
    </svg>
  );
}
