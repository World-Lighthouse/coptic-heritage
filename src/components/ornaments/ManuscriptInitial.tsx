import type { HTMLAttributes } from "react";

type ManuscriptInitialProps = Omit<HTMLAttributes<HTMLSpanElement>, "children"> & {
  letter: string;
};

export function ManuscriptInitial({ letter, className, ...rest }: ManuscriptInitialProps) {
  const trimmed = letter.trim();
  const display = trimmed.length > 0 ? Array.from(trimmed)[0] : "";

  return (
    <span
      className={["manuscript-initial", className].filter(Boolean).join(" ")}
      aria-hidden="true"
      {...rest}
    >
      {display}
    </span>
  );
}
