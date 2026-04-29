import { Navigate } from "react-router-dom";
import { TextilePattern } from "../../components/ornaments/TextilePattern";

export function Ornaments() {
  if (!import.meta.env.DEV) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="dev-ornaments">
      <header className="dev-ornaments__header">
        <p className="dev-ornaments__eyebrow">Dev story</p>
        <h1>TextilePattern — Coptic step-fret</h1>
        <p className="dev-ornaments__intro">
          Four panels for visually verifying the pattern: a single tile so the
          geometry is legible, a 4×4 grid to confirm seamless tiling, the
          default <code>light</code> tone at empty-state opacity, and the
          <code>ornament</code> tone at full strength.
        </p>
      </header>

      <article className="dev-panel">
        <h2>1. Single tile · 256×256</h2>
        <p className="dev-panel__caption">
          One 64×64 tile scaled up so each unit (u) reads at 16px. Use this to
          inspect geometry: 1u line / 1u gap, 1u outer border, 4-fold rotation,
          central 2u-thick Greek cross.
        </p>
        <div className="dev-panel__frame dev-panel__frame--single">
          <TextilePattern opacity={1} viewBox="0 0 64 64" />
        </div>
      </article>

      <article className="dev-panel">
        <h2>2. Tiling · 4×4 at native size</h2>
        <p className="dev-panel__caption">
          Sixteen tiles at native 64×64. Tile seams should be invisible — the
          pattern flows continuously across boundaries.
        </p>
        <div className="dev-panel__frame dev-panel__frame--tile">
          <TextilePattern opacity={1} />
        </div>
      </article>

      <article className="dev-panel">
        <h2>3. tone="light" · 5% on parchment</h2>
        <p className="dev-panel__caption">
          The empty-state look. Default opacity is 0.05.
        </p>
        <div className="dev-panel__frame dev-panel__frame--light">
          <TextilePattern />
        </div>
      </article>

      <article className="dev-panel">
        <h2>4. tone="ornament" · full strength</h2>
        <p className="dev-panel__caption">
          The decorative-moment look — ink ground, ochre lines.
        </p>
        <div className="dev-panel__frame dev-panel__frame--ornament">
          <TextilePattern tone="ornament" />
        </div>
      </article>
    </section>
  );
}
