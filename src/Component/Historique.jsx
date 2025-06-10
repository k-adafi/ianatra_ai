import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/historique.css';
import logo from '../assets/Logo/logo_court_bleu.png'
import { Link } from 'react-router-dom';

function Historique() {
  return (
    <div className="historique-container">
      <div className='historique-logo bg-light'>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Link to="/modules" className='btn btn-primary'>Explorer les modules</Link>
      </div>  
      <div className="historique-header mt-5 bg-light">
        <h4>Historique</h4>
      </div>
      <div className="historique-content">
        {/* Liste des conversations historiques */}
        <div className="historique-item">Conversation 1</div>
        <div className="historique-item">Conversation 2</div>
        <div className="historique-item">Conversation 3</div>
      </div>
    </div>
  )
}

export default Historique