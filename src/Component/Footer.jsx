// Footer.js
import React, { useState } from "react";

import '../style/footer.css';
import 'bootstrap/dist/css/bootstrap.css'; // Bootstrap est surtout utilisé pour le bouton ici
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/Logo/logo_long_bleu.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // const [messageType, setMessageType] = useState(''); // 'success' ou 'error'

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!email) {
  //     setMessage("Veuillez entrer une adresse email.");
  //     setMessageType('error');
  //     return;
  //   }
  //   try {
  //     // Remplacez l'URL par votre endpoint API réel
  //     const response = await axios.post('http://127.0.0.1:8000/api/newsletters', { email });
  //     setMessage("Merci ! Votre email a été enregistré avec succès.");
  //     setMessageType('success');
  //     setEmail('');
  //   } catch (error) {
  //     if (error.response && error.response.status === 422) {
  //       setMessage("L'email fourni est invalide ou déjà abonné.");
  //     } else {
  //       setMessage("Une erreur est survenue. Veuillez réessayer.");
  //     }
  //     setMessageType('error');
  //   }
  // };

  return (
    <div className="footer-wrapper">
      <div className='container'> {/* container Bootstrap pour limiter la largeur max */}
        <footer className='footer-grid'>
          {/* Colonne 1: Newsletter et Réseaux Sociaux */}
          <div className='footer-column'>
            <img src={logo} alt='Immo Mada Ocea Logo' className="footer-logo" />
            <h5>Abonnez-vous à notre newsletter</h5>
            <p>Ne manquez pas nos futures publications et offres exclusives !</p>
            
            <form className='newsletter-form'>
              <label htmlFor="newsletter-email">Votre adresse Email</label>
              <input
                id="newsletter-email"
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Votre adresse Email'
                required
              />
              <button type="submit" className="btn btn-primary btn-shake">Envoyer</button>
            </form>
           
            <h5 className="mt-5 mb-3">Suivez-nous</h5>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          {/* Colonne 2: Liens de navigation */}
          <div className='footer-column footer-nav'>
            <h5>Navigation</h5>
            <ul>
              <li><a href="#">Qui sommes-nous ?</a></li>
              <li><a href="#">Politique de confidentialité</a></li>
              <li><a href="#">Termes et conditions</a></li>
              <li><a href="#">Nos services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Colonne 3: Informations de contact */}
          <div className='footer-column footer-contact'>
            <h5>Contactez-nous</h5>
            <ul>
              <li><Phone size={18}/> <span>+261 32 27 361 26</span></li>
              <li><Phone size={18}/> <span>+261 32 11 361 26</span></li>
              <li><Mail size={18}/> <span>contact@immomadaocea.com</span></li>
            </ul>

            <h5 className="mt-4">Adresse</h5>
            <ul>
                <li><MapPin size={18}/> <span>Rue Boulevard d'Andovoranto Lot 32, Toamasina 501, Madagascar.</span></li>
            </ul>
          </div>
        </footer>
      </div>

      <div className='legal-bar'>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <span>© {new Date().getFullYear()} Developped by LK technologie | All rights reserved.</span>
        </a>
      </div>
    </div>
  );
}

export default Footer;