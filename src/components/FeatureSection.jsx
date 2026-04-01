const FEATURES = [
  {
    name: "Reality Score",
    pitch:
      "Your plan is only powerful when it survives contact with real life. Reality Score exposes the gap between intention and execution, then helps close it.",
  },
  {
    name: "Pull-to-Focus",
    pitch:
      "When your list starts shouting, pull once. Tody collapses the chaos and surfaces only your top three non-negotiables.",
  },
  {
    name: "The Today Line",
    pitch:
      "A persistent horizon between now and later. Your brain gets a clean boundary, so urgency stops bleeding into everything.",
  },
  {
    name: "Magnetic Deadline Snapping",
    pitch:
      "Deadlines lock to human rhythms, not random timestamps. Scheduling feels natural, fast, and strangely satisfying.",
  },
];

function FeatureSection() {
  return (
    <section className="section frame reveal" id="capabilities" aria-label="Core capabilities">
      <h2 className="section-title">Every interaction removes friction from the human mind.</h2>
      <p className="section-intro glass-para compact">
        Built for real days with interruptions, pressure, and limited energy.
      </p>

      <div className="feature-list" role="list">
        {FEATURES.map((feature, index) => (
          <article
            className="feature-item reveal"
            key={feature.name}
            style={{ transitionDelay: `${index * 110}ms` }}
            role="listitem"
          >
            <h3>{feature.name}</h3>
            <p>{feature.pitch}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;
