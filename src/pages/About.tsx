import { ManuscriptInitial } from "../components/ornaments/ManuscriptInitial";
import { Ornament } from "../components/ornaments/Ornament";

export function About() {
  return (
    <section className="about">
      <header className="about__title">
        <div className="page-title__eyebrow">
          <Ornament variant="chapter" />
        </div>
        <h1>About this work</h1>
      </header>

      <p className="about__lede">
        <ManuscriptInitial letter="T" />
        his project began as an attempt to read carefully — to make a small,
        accountable place where the Coptic textual tradition could be
        approached without distortion.
      </p>

      <div className="about__divider">
        <Ornament variant="rule" />
      </div>

      <article className="about__section">
        <h2>Premise</h2>
        <p>
          The library is built around a single rule: every answer must be
          traceable to an approved primary source. There is no synthesis from
          general knowledge, no paraphrase that softens uncertainty, no
          confident guess in place of a cautious silence.
        </p>
        <p>
          What we cannot answer from the approved sources, we leave unanswered.
          That is part of the work.
        </p>
      </article>

      <div className="about__divider">
        <Ornament variant="rule" />
      </div>

      <article className="about__section" id="sources">
        <h2>Sources</h2>
        <p>
          Texts enter the library only after editorial review. Each is recorded
          with its provenance, its translator where relevant, and the state of
          the text at the time of inclusion. Citations point back to the
          document, not to a paraphrase of it.
        </p>
        <p>
          We accept suggestions for new sources. We do not accept generated
          material, undocumented translations, or texts of unclear provenance.
        </p>
      </article>

      <div className="about__divider">
        <Ornament variant="rule" />
      </div>

      <article className="about__section">
        <h2>Editorial principles</h2>
        <p>
          Restraint over reach. A short answer that is grounded is preferable
          to a long answer that is not. Where the tradition speaks in more
          than one voice, we say so. Where a question sits outside the
          approved sources, we say that, too.
        </p>
        <p>
          The visual language of the site is intended to match the editorial
          stance: quiet, deliberate, and accountable to the texts it serves.
        </p>
      </article>
    </section>
  );
}
