import { Ornament } from "../components/ornaments/Ornament";
import { EmptyState } from "../components/EmptyState";

export function Sources() {
  return (
    <section>
      <header className="about__title">
        <div className="page-title__eyebrow">
          <Ornament variant="chapter" />
        </div>
        <h1>Sources</h1>
      </header>

      <EmptyState title="No sources have been added yet.">
        Approved primary documents will appear here as the editorial team
        completes their review.
      </EmptyState>
    </section>
  );
}
