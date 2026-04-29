import type { SVGProps } from "react";

type CornerRotation = 0 | 90 | 180 | 270;

type OrnamentProps =
  | ({ variant: "rule" } & SVGProps<SVGSVGElement>)
  | ({ variant: "chapter" } & SVGProps<SVGSVGElement>)
  | ({ variant: "corner"; rotate?: CornerRotation } & SVGProps<SVGSVGElement>);

export function Ornament(props: OrnamentProps) {
  if (props.variant === "rule") {
    const { variant: _variant, className, ...rest } = props;
    return (
      <svg
        width="200"
        height="12"
        viewBox="0 0 200 12"
        fill="none"
        stroke="var(--rule, currentColor)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
        className={["ornament", "ornament--rule", className].filter(Boolean).join(" ")}
        {...rest}
      >
        <line x1="0" y1="6" x2="92" y2="6" />
        <line x1="108" y1="6" x2="200" y2="6" />
        <path d="M100 1 L105 6 L100 11 L95 6 Z" />
      </svg>
    );
  }

  if (props.variant === "chapter") {
    const { variant: _variant, className, ...rest } = props;
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="var(--ochre, currentColor)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
        className={["ornament", "ornament--chapter", className].filter(Boolean).join(" ")}
        {...rest}
      >
        <path d="M8 1 L11 8 L8 15 L5 8 Z" />
        <path d="M1 8 L8 5 L15 8 L8 11 Z" />
      </svg>
    );
  }

  const { variant: _variant, rotate = 0, className, style, ...rest } = props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--rule, currentColor)"
      strokeWidth="1"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      data-rotate={rotate}
      className={["ornament", "ornament--corner", className].filter(Boolean).join(" ")}
      style={{ ...style, ["--ornament-rotate" as string]: `${rotate}deg` }}
      {...rest}
    >
      <path d="M2 2 L2 12 L7 12 L7 7 L12 7 L12 2" />
      <path d="M2 16 L5 16" />
      <path d="M16 2 L16 5" />
      <circle cx="10" cy="10" r="1" />
    </svg>
  );
}
