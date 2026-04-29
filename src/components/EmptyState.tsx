import type { ReactNode } from "react";
import { TextilePattern } from "./ornaments/TextilePattern";

type EmptyStateProps = {
  title: string;
  children?: ReactNode;
};

export function EmptyState({ title, children }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <div className="empty-state__pattern" aria-hidden="true">
        <TextilePattern />
      </div>
      <div className="empty-state__content">
        <p className="empty-state__title">{title}</p>
        {children ? <p className="empty-state__copy">{children}</p> : null}
      </div>
    </div>
  );
}
