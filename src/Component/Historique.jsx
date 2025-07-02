import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/historique.css';
import logo from '../assets/Logo/logo_court_bleu.png'
import { Link } from 'react-router-dom';

function Historique() {
  // Exemple de données d'historique - remplacer par vos données réelles
  const historiqueItems = [
    "Équations du second degré",
    "Théorème de Pythagore",
    "Fonctions trigonométriques",
    "Calcul de dérivées",
    "Intégrales définies",
    "Matrices et déterminants",
    "Géométrie analytique",
    "Probabilités discrètes",
    "Suites numériques"
  ];

  return (
    <div className="historique-container">
      <div className='historique-logo'>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Link to="/modules" className='btn-history'>Explorer les modules</Link>
      </div>  
      <div className="historique-header">
        <h4>Historique</h4>
      </div>
      <div className="historique-content">
        {historiqueItems.map((item, index) => (
          <div key={index} className="historique-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Historique;