import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import CtaSection from "./components/CtaSection";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";

function App() {
  useRevealOnScroll(".reveal");
  const backgroundVersion = "20260316-3";

  return (
    <div className="page-shell">
      <div className="video-background" aria-hidden="true">
        <img
          className="video-background-media"
          src={`/assets/tody-background.gif?v=${backgroundVersion}`}
          alt=""
        />
      </div>

      <div className="background-overlay" aria-hidden="true" />

      <header className="top-mark reveal" aria-label="Tody brand mark">
        <img src="/assets/tody-logo.png" alt="Tody" className="brand-logo" />
      </header>

      <main id="top" className="site-main">
        <HeroSection />
        <FeatureSection />
        <CtaSection />
      </main>
    </div>
  );
}

export default App;
