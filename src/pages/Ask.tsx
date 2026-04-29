import { useState } from "react";
import { Ornament } from "../components/ornaments/Ornament";

export function Ask() {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (question.trim().length === 0) return;
    setSubmitted(true);
  }

  return (
    <section>
      <h1 className="page-title">Ask a question</h1>

      <form className="ask-card" onSubmit={handleSubmit}>
        <span className="ask-card__corner ask-card__corner--tl">
          <Ornament variant="corner" rotate={0} />
        </span>
        <span className="ask-card__corner ask-card__corner--br">
          <Ornament variant="corner" rotate={180} />
        </span>

        <label className="ask-card__label" htmlFor="question">
          Ask a question about Coptic heritage.
        </label>
        <textarea
          id="question"
          className="ask-card__textarea"
          placeholder="What would you like to understand?"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          rows={5}
        />
        <div className="ask-card__actions">
          <p className="ask-card__hint">
            Answers are drawn only from approved sources.
          </p>
          <button
            type="submit"
            className="button button--primary"
            disabled={question.trim().length === 0}
          >
            Submit
          </button>
        </div>
      </form>

      {submitted ? (
        <div className="notice" role="status" aria-live="polite">
          <div className="notice__rule">
            <Ornament variant="rule" />
          </div>
          <p className="notice__title">There is not enough information in the approved sources.</p>
          <p className="notice__copy">
            We will not infer beyond what the documents say. You may rephrase the
            question, or write to the editorial team to suggest a source for review.
          </p>
        </div>
      ) : null}
    </section>
  );
}
