import "../Styles/Landing_page.css";
import HederaLogo from "../Assets/hedera-logo.png"; // Make sure this exists

const Landing_page = () => {
  return (
    <div className="landing-page-wrapper">
      {/* Hero Section */}
      <header className="landing-hero">
        <div className="hero-content">
          <h1>💊 MedSupply Chain</h1>
          <p>
            Assurer la <span className="highlight">traçabilité complète et infalsifiable</span> des médicaments,
            de leur fabrication jusqu’à leur délivrance au patient, afin de
            <span className="highlight"> lutter efficacement contre la contrefaçon</span> et les anomalies logistiques.
          </p>
          <p>
            En collaboration avec{" "}
            <img
              src={HederaLogo}
              alt="Hedera Hashgraph"
              style={{ width: "100px", verticalAlign: "middle", marginLeft: "0.5rem" }}
            />
          </p>
          <a href="#learn-more" className="cta-button">
            En savoir plus
          </a>
        </div>
        <div className="hero-image">
          <img src={HederaLogo} alt="Hedera Logo" />
        </div>
      </header>

      {/* Features Section */}
      <section id="learn-more" className="features-section">
        <h2>Fonctionnement</h2>
        <div className="feature-cards">
          <div className="card">
            <strong>Identifiant unique :</strong>
            <p>Chaque lot de médicament se voit attribuer un identifiant unique sur Hedera Hashgraph.</p>
          </div>
          <div className="card">
            <strong>Suivi en temps réel :</strong>
            <p>À chaque étape — usine → distributeur → pharmacie → patient — un événement est inscrit sur la blockchain.</p>
          </div>
          <div className="card">
            <strong>Analyse intelligente :</strong>
            <p>Une IA de surveillance détecte les ruptures suspectes, surstocks anormaux et incohérences géographiques.</p>
          </div>
        </div>

        {/* Footer content as a section */}
        <div className="landing-footer-section">
            <p>copyrights@MEDSUPPLYCHAIN@2025</p>
        </div>
      </section>
    </div>
  );
};

export default Landing_page;
