function HeroSection() {
  return (
    <section className="hero section frame reveal">
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
        <a className="download-button primary" href="#" aria-label="Download the App now">
          Download the App
        </a>
        <a className="hero-cta" href="#capabilities" aria-label="Jump to capabilities">
          Explore How It Works
        </a>
      </div>

      <p className="hero-subtitle glass-para compact">
        One clear lane for today. One realistic plan. One visible win streak.
      </p>
    </section>
  );
}

export default HeroSection;
