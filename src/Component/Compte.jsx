import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/compte.css'; // Fichier CSS pour les styles supplémentaires

function Compte() {
  // Données de l'utilisateur (à remplacer par vos données réelles)
  const userData = {
    name: "Jean Dupont",
    photo: "https://randomuser.me/api/portraits/men/1.jpg" // URL de l'image de profil
  };

  return (
    <div className="compte-container">
      <div className="user-profile-card">
        <Link to="/profile" className="user-profile-link">
          <div className="user-info">
            <img 
              src={userData.photo} 
              alt="Photo de profil" 
              className="user-avatar"
            />
            <span className="user-name">{userData.name}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Compte;