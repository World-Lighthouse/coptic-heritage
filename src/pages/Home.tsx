import { Link } from "react-router-dom";
import { ManuscriptInitial } from "../components/ornaments/ManuscriptInitial";

export function Home() {
  return (
    <section className="hero">
      <p className="hero__eyebrow">A reading room for primary documents</p>

      <p className="hero__lede">
        <ManuscriptInitial letter="A" />
        small library for the long study of Coptic heritage. Approved primary
        sources, considered questions, and answers traced — without exception
        — to the documents that ground them.
      </p>
      <p className="hero__sub">
        This is not a search engine. It is a slow reading room: a place to ask,
        to wait, and to read with care.
      </p>
      <div className="hero__actions">
        <Link to="/ask" className="button button--primary">
          Ask a question
        </Link>
        <Link to="/about" className="button">
          About this work
        </Link>
      </div>

      <div className="hero__principles" aria-label="Editorial principles">
        <article className="hero__principle">
          <h3 className="hero__principle-label">Approved sources</h3>
          <p className="hero__principle-copy">
            Texts are reviewed by editors before they enter the library. Nothing
            is generated, nothing is paraphrased.
          </p>
        </article>
        <article className="hero__principle">
          <h3 className="hero__principle-label">Traced citations</h3>
          <p className="hero__principle-copy">
            Every answer points back to the document that grounds it, with
            translator and provenance preserved.
          </p>
        </article>
        <article className="hero__principle">
          <h3 className="hero__principle-label">Honest silence</h3>
          <p className="hero__principle-copy">
            When the approved sources do not answer a question, the question is
            left open rather than guessed at.
          </p>
        </article>
      </div>

      <div className="home-aside">
        <div className="home-aside__label">A note from the editors</div>
        <div className="home-aside__body">
          <p>
            The library is small by design. We add slowly, we cite always, and
            we leave open what we cannot ground in the texts. The work is
            measured in care, not in volume.
          </p>
          <p>
            <Link to="/about">Read the editorial principles</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
