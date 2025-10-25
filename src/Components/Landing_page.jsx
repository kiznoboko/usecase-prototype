// import React from "react";
// import { useState, useEffect } from "react";
// import "../Styles/Landing_page.css"; // Import the CSS for styling
// import HederaLogo from "../Assets/hedera-logo.png"; // Import the logo image
// import { useNavigate } from "react-router-dom";

// const Landing_page = () => {
//   const navigate = useNavigate()

//    useEffect(() => {
//     if (location.state && location.state.scrollTo) {
//       const sectionId = location.state.scrollTo;
//       const element = document.getElementById(sectionId);

//       if (element) {
//         // Scroll to the target section on page load
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   }, [location]); // Run effect when location changes
//   // Smooth scroll with offset
//   const handleScrollToSection = (event, targetId) => {
//     event.preventDefault();
//     const targetElement = document.getElementById(targetId);
    
//     // You can adjust the offset (e.g., for a fixed header)
//     const offset = 50; // adjust this value if necessary

//     window.scrollTo({
//       top: targetElement.offsetTop - offset,
//       behavior: "smooth",
//     });
//   };

//   const handledevis = () => {
//       navigate("/demander_devis")
//   }

//   return (
//     <div className="landing-page-wrapper">
//       {/* Header Section */}
//       <header className="topbar">
//         <div className="container nav">
//           <div className="brand">
//             <div className="logo">
//               <img src={HederaLogo} alt="Hedera Logo" />
//             </div>
//             <span>MedSupply Chain</span>
//           </div>
//           <nav className="nav-links">
//             <a href="#mission" onClick={(e) => handleScrollToSection(e, "mission")}>Mission</a>
//             <a href="#services" onClick={(e) => handleScrollToSection(e, "services")}>Services</a>
//             <a href="#process" onClick={(e) => handleScrollToSection(e, "process")}>Processus</a>
//             <a href="#results" onClick={(e) => handleScrollToSection(e, "results")}>Résultats</a>
//             <a href="#contact" onClick={(e) => handleScrollToSection(e, "contact")}>Contact</a>
//             <button className="cta" onClick={handledevis}>Demander un devis</button>
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <main>
//         <section className="hero">
//           <div className="container hero-grid">
//             <div className="hero-left">
//               <small className="chip">Expert Pharmaceutique Certifié</small>
//               <h1>Sécurité et Traçabilité des Médicaments</h1>
//               <p className="lead">
//                 Garantir l'authenticité de chaque médicament grâce à une traçabilité complète et infalsifiable, de la production à la distribution.
//               </p>

//               <div className="hero-ctas">
//                 <button className="btn primary">Découvrir l'expertise</button>
//                 <button className="btn ghost">Voir la démo</button>
//               </div>

//               <ul className="features">
//                 <li>Traçabilité de bout en bout</li>
//                 <li>Protection contre la contrefaçon</li>
//                 <li>Conformité réglementaire totale</li>
//               </ul>
//             </div>

//             <div className="hero-right">
//               <div className="card-media">
//                 <div className="media-frame">
//                   <svg viewBox="0 0 100 100" className="media-img" xmlns="http://www.w3.org/2000/svg">
//                     <rect width="100" height="100" rx="8" fill="#08121a" />
//                     <g fill="#00ff7a">
//                       <rect x="35" y="25" width="8" height="50" rx="2" />
//                       <rect x="57" y="25" width="8" height="50" rx="2" />
//                       <rect x="25" y="45" width="50" height="8" rx="2" />
//                     </g>
//                   </svg>
//                 </div>

//                 <div className="badge">100% Sécurisé<br /><span>Technologie blockchain</span></div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Mission Section */}
//         <section id="mission" className="container mission">
//           <h2>Une Mission Essentielle</h2>
//           <p className="muted">Protéger les patients en garantissant l'intégrité de la chaîne d'approvisionnement pharmaceutique mondiale</p>

//           <div className="cards-row">
//             <div className="info-card">
//               <h3>Notre Mission</h3>
//               <p>Assurer la traçabilité complète et infalsifiable des médicaments, de leur fabrication jusqu'à leur délivrance au patient.</p>
//             </div>
//             <div className="info-card">
//               <h3>Notre Engagement</h3>
//               <p>Lutter efficacement contre la contrefaçon pharmaceutique et protéger la santé publique.</p>
//             </div>
//             <div className="info-card">
//               <h3>Notre Approche</h3>
//               <p>Détecter et résoudre les anomalies logistiques en temps réel grâce à des technologies de pointe.</p>
//             </div>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section id="services" className="container services">
//           <h3>Services</h3>
//           <div className="services-panel">
//             <div className="panel-left">
//               <div className="panel-card">
//                 <h4>Systèmes de Traçabilité Avancés</h4>
//                 <p>Mise en place de solutions complètes pour suivre chaque médicament tout au long de son parcours.</p>
//                 <div className="progress">
//                   <div className="progress-bar" style={{ width: '99%' }}></div>
//                 </div>
//                 <small>Précision 99.9%</small>
//               </div>
//             </div>
//             <div className="panel-right">
//               <ul className="features-list">
//                 <li>Sérialisation unitaire des produits</li>
//                 <li>Codes QR et RFID sécurisés</li>
//                 <li>Suivi en temps réel</li>
//                 <li>Intégration ERP/WMS</li>
//                 <li>Rapports automatisés</li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* Processus Section */}
//         <section id="process" className="container process">
//           <h3>Processus de Traçabilité</h3>
//           <p className="muted">Un suivi continu du médicament à chaque étape de son parcours</p>

//           <div className="process-row">
//             <div className="step">
//               <div className="step-num">01</div>
//               <h4>Fabrication</h4>
//               <p>Enregistrement de la production</p>
//             </div>
//             <div className="step">
//               <div className="step-num">02</div>
//               <h4>Distribution</h4>
//               <p>Suivi logistique à chaque point de transit</p>
//             </div>
//             <div className="step">
//               <div className="step-num">03</div>
//               <h4>Pharmacie</h4>
//               <p>Vérification à la réception et stockage sécurisé</p>
//             </div>
//             <div className="step">
//               <div className="step-num">04</div>
//               <h4>Patient</h4>
//               <p>Utilisation finale avec confirmation d'authenticité</p>
//             </div>
//           </div>
//         </section>

//         {/* Résultats Section */}
//         <section id="results" className="container results">
//           <h3>Résultats Concrets</h3>
//           <div className="metrics">
//             <div className="metric"><strong>95%</strong><span>Réduction contrefaçon</span></div>
//             <div className="metric"><strong>10+</strong><span>Ans d'expérience</span></div>
//             <div className="metric"><strong>50+</strong><span>Pays couverts</span></div>
//             <div className="metric"><strong>&lt;1s</strong><span>temps de vérification</span></div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="container contact">
//           <div className="contact-grid">
//             <div className="contact-left">
//               <h3>Travaillons Ensemble</h3>
//               <p>Vous souhaitez mettre en place une solution de traçabilité pharmaceutique ? Contactez-nous pour discuter de votre projet.</p>

//               <ul className="contact-info">
//                 <li><strong>Email:</strong> expert@medtracex.fr</li>
//                 <li><strong>Téléphone:</strong> +33 1 23 45 67 89</li>
//                 <li><strong>Localisation:</strong> Paris, France</li>
//               </ul>
//             </div>

//             <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
//               <div className="form-row">
//                 <input placeholder="Prénom" />
//                 <input placeholder="Nom" />
//               </div>
//               <input placeholder="Email" />
//               <input placeholder="Entreprise" />
//               <textarea placeholder="Message"></textarea>
//               <button className="btn primary">Envoyer le message</button>
//             </form>
//           </div>
//         </section>
//       </main>

//       {/* Footer Section */}
//       <footer className="site-footer">
//         <div className="container footer-grid">
//           <div>
//             <strong> MedSupply Chain</strong>
//             <p>Expert en traçabilité pharmaceutique et lutte contre la contrefaçon.</p>
//           </div>
//           <div className="footer-links">
//             <a href="#mission">Mission</a>
//             <a href="#services">Services</a>
//             <a href="#process">Processus</a>
//             <a href="#contact">Contact</a>
//           </div>
//           <div>
//             <small>© 2025  MedSupply Chain. Tous droits réservés.</small>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Landing_page;


import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Styles/Landing_page.css"; // Import the CSS for styling
import HederaLogo from "../Assets/hedera-logo.png"; // Import the logo image

const Landing_page = () => {
  const location = useLocation(); // Import and use location to get state
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      const element = document.getElementById(sectionId);

      if (element) {
        // Scroll to the target section on page load
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]); // Run effect when location changes

  const handleScrollToSection = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    // You can adjust the offset (e.g., for a fixed header)
    const offset = 50; // adjust this value if necessary

    window.scrollTo({
      top: targetElement.offsetTop - offset,
      behavior: "smooth",
    });
  };

  const handledevis = () => {
      navigate("/demander_devis")
  }

  const handleDemo = () => {
    navigate("/Demo")
  }

  return (
    <div className="landing-page-wrapper">
      {/* Header Section */}
      <header className="topbar">
        <div className="container nav">
          <div className="brand">
            <div className="logo">
              <img src={HederaLogo} alt="Hedera Logo" />
            </div>
            <span>MedSupply Chain</span>
          </div>
          <nav className="nav-links">
            <a href="#mission" onClick={(e) => handleScrollToSection(e, "mission")}>Mission</a>
            <a href="#services" onClick={(e) => handleScrollToSection(e, "services")}>Services</a>
            <a href="#process" onClick={(e) => handleScrollToSection(e, "process")}>Processus</a>
            <a href="#results" onClick={(e) => handleScrollToSection(e, "results")}>Résultats</a>
            <a href="#contact" onClick={(e) => handleScrollToSection(e, "contact")}>Contact</a>
            <button className="cta" onClick={handledevis}>Demander un devis</button>
            
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-left">
              <small className="chip">Expert Pharmaceutique Certifié</small>
              <h1>Sécurité et Traçabilité des Médicaments</h1>
              <p className="lead">
                Garantir l'authenticité de chaque médicament grâce à une traçabilité complète et infalsifiable, de la production à la distribution.
              </p>

              <div className="hero-ctas">
                <button className="btn primary">Découvrir l'expertise</button>
                <button className="btn ghost" onClick={handleDemo}>Voir la démo</button>
              </div>

              <ul className="features">
                <li>Traçabilité de bout en bout</li>
                <li>Protection contre la contrefaçon</li>
                <li>Conformité réglementaire totale</li>
              </ul>
            </div>

            <div className="hero-right">
              <div className="card-media">
                <div className="media-frame">
                  <svg viewBox="0 0 100 100" className="media-img" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" rx="8" fill="#08121a" />
                    <g fill="#00ff7a">
                      <rect x="35" y="25" width="8" height="50" rx="2" />
                      <rect x="57" y="25" width="8" height="50" rx="2" />
                      <rect x="25" y="45" width="50" height="8" rx="2" />
                    </g>
                  </svg>
                </div>

                <div className="badge">100% Sécurisé<br /><span>Technologie blockchain</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="container mission">
          <h2>Une Mission Essentielle</h2>
          <p className="muted">Protéger les patients en garantissant l'intégrité de la chaîne d'approvisionnement pharmaceutique mondiale</p>

          <div className="cards-row">
            <div className="info-card">
              <h3>Notre Mission</h3>
              <p>Assurer la traçabilité complète et infalsifiable des médicaments, de leur fabrication jusqu'à leur délivrance au patient.</p>
            </div>
            <div className="info-card">
              <h3>Notre Engagement</h3>
              <p>Lutter efficacement contre la contrefaçon pharmaceutique et protéger la santé publique.</p>
            </div>
            <div className="info-card">
              <h3>Notre Approche</h3>
              <p>Détecter et résoudre les anomalies logistiques en temps réel grâce à des technologies de pointe.</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="container services">
          <h3>Services</h3>
          <div className="services-panel">
            <div className="panel-left">
              <div className="panel-card">
                <h4>Systèmes de Traçabilité Avancés</h4>
                <p>Mise en place de solutions complètes pour suivre chaque médicament tout au long de son parcours.</p>
                <div className="progress">
                  <div className="progress-bar" style={{ width: '99%' }}></div>
                </div>
                <small>Précision 99.9%</small>
              </div>
            </div>
            <div className="panel-right">
              <ul className="features-list">
                <li>Sérialisation unitaire des produits</li>
                <li>Codes QR et RFID sécurisés</li>
                <li>Suivi en temps réel</li>
                <li>Intégration ERP/WMS</li>
                <li>Rapports automatisés</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Processus Section */}
        <section id="process" className="container process">
          <h3>Processus de Traçabilité</h3>
          <p className="muted">Un suivi continu du médicament à chaque étape de son parcours</p>

          <div className="process-row">
            <div className="step">
              <div className="step-num">01</div>
              <h4>Fabrication</h4>
              <p>Enregistrement de la production</p>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <h4>Distribution</h4>
              <p>Suivi logistique à chaque point de transit</p>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <h4>Pharmacie</h4>
              <p>Vérification à la réception et stockage sécurisé</p>
            </div>
            <div className="step">
              <div className="step-num">04</div>
              <h4>Patient</h4>
              <p>Utilisation finale avec confirmation d'authenticité</p>
            </div>
          </div>
        </section>

        {/* Résultats Section */}
        <section id="results" className="container results">
          <h3>Résultats Concrets</h3>
          <div className="metrics">
            <div className="metric"><strong>95%</strong><span>Réduction contrefaçon</span></div>
            <div className="metric"><strong>10+</strong><span>Ans d'expérience</span></div>
            <div className="metric"><strong>50+</strong><span>Pays couverts</span></div>
            <div className="metric"><strong>&lt;1s</strong><span>temps de vérification</span></div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container contact">
          <div className="contact-grid">
            <div className="contact-left">
              <h3>Travaillons Ensemble</h3>
              <p>Vous souhaitez mettre en place une solution de traçabilité pharmaceutique ? Contactez-nous pour discuter de votre projet.</p>

              <ul className="contact-info">
                <li><strong>Email:</strong> expert@medtracex.fr</li>
                <li><strong>Téléphone:</strong> +33 1 23 45 67 89</li>
                <li><strong>Localisation:</strong> Paris, France</li>
              </ul>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <input placeholder="Prénom" />
                <input placeholder="Nom" />
              </div>
              <input placeholder="Email" />
              <input placeholder="Entreprise" />
              <textarea placeholder="Message"></textarea>
              <button className="btn primary">Envoyer le message</button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <strong> MedSupply Chain</strong>
            <p>Expert en traçabilité pharmaceutique et lutte contre la contrefaçon.</p>
          </div>
          <div className="footer-links">
            <a href="#mission">Mission</a>
            <a href="#services">Services</a>
            <a href="#process">Processus</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <small>© 2025  MedSupply Chain. Tous droits réservés.</small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing_page;
