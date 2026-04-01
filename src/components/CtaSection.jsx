function CtaSection() {
  const releaseUrl = "https://github.com/reyyanxjanbaz/Tody/releases/tag/v2.0.3";

  return (
    <section className="section frame reveal" id="download">
      <div className="closing-layout">
        <h2 className="closing-title">
          If your calendar is full,
          <br />
          your standards are high,
          <br />
          and your energy is finite,
          <br />
          download Tody now.
        </h2>

        <div className="closing-actions">
          <a className="download-button" href={releaseUrl} target="_blank" rel="noreferrer" aria-label="Download the App">
            Download the App
          </a>

          <p className="closing-note glass-para compact">
            Built for people who refuse to confuse motion with progress.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
