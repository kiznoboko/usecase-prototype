import "../Styles/demander_devis.css";
import HederaLogo from "../Assets/hedera-logo.png";
import { useNavigate } from "react-router-dom";
const Demander_devis = () => {
     const navigate = useNavigate();

    const handleScrollToSection = (e, section) => {
  e.preventDefault();
 
  
  // Navigate to the landing page and pass the section info in the state
  navigate('/', { state: { scrollTo: section } });
};
    return (
        <>
            <div className="Demander_deviswrapper">
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
                           {/* <button className="cta" onClick={handledevis}>Demander un devis</button> */}
                         </nav>
                       </div>
                     </header>
                <form action="" className="demander-devis-form">
                    <legend className="demander_devis_title">importer le devis du produit</legend>
                    <div className="form-control-submit-devis">
                        <input type="text"  placeholder="enter devis identifient" className="form-control-devis-input"/>
                    <button type="submit" className="btn btn-submit-devis">import register</button>
                    </div>
                    
                </form>


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
        </>
    )
}

export default Demander_devis;