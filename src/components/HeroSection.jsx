function HeroSection() {
  const releaseUrl = "https://github.com/reyyanxjanbaz/Tody/releases/tag/v2.0.3";

  return (
    <section className="hero section frame reveal" aria-label="Tody introduction">
      <div className="hero-layout">
        <div className="hero-main">
          <h1 className="hero-title">
            Stop drowning in plans.
            <br />
            Start finishing what matters.
          </h1>

          <p className="hero-body glass-para">
            Tody cuts through overload with a calm execution layer built around
            human attention, not endless lists.
          </p>

          <div className="hero-action-row">
            <a
              className="download-button primary"
              href={releaseUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Download the App now"
            >
              Download the App
            </a>
            <a className="hero-cta" href="#capabilities" aria-label="Jump to capabilities">
              Explore How It Works
            </a>
          </div>
        </div>

        <aside className="hero-side reveal">
          <p className="hero-subtitle glass-para compact">
            One clear lane for today. One realistic plan. One visible win streak.
          </p>
        </aside>
      </div>
    </section>
  );
}

export default HeroSection;
