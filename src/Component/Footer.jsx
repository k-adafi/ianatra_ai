import React from "react";
import '../style/footer.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaPinterest } from 'react-icons/fa';
import { SiThreads, SiX } from 'react-icons/si';
import logo from '../assets/Logo/logo_long_bleu.png';
// import  { useState } from "react";

const Footer = () => {

  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault(); // empêche le rechargement
  //   try {
  //     const response = await axios.post('http://127.0.0.1:8000/api/newsletters', {
  //       email: email,
  //     });
  //     setMessage("Merci ! Email enregistré avec succès.");
  //     alert('Merci ! Email enregistré avec succès.')
  //     setEmail('');
  //   } catch (error) {
  //     if (error.response && error.response.status === 422) {
  //       setMessage("Email invalide ou déjà utilisé.");
  //       alert('Email invalide ou déjà utilisé.')
  //     } else {
  //       setMessage("Une erreur s'est produite.");
  //       alert("Une erreur s'est produite.")
  //     }
  //   }
  // };

  return (
    <div>
      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src={logo} alt='logo' className="img-fluid" />
              <h5>Abonnez-vous à notre newsletter</h5>
              <p>Ne manquez pas nos futures publications ! <br /> Abonnez-vous maintenant !</p>

              <div className='input flex'>
                <form >
                    <input
                      type='email'
                      // value=''
                      // onChange={(e) => setEmail(e.target.value)}
                      placeholder='Votre adresse Email'
                      required
                    />
                    <button type="submit" className="btn mt-2 btn-primary">Envoyer</button>
                  </form>
              </div>
            </div>
            <h5 className="mt-5 mb-4">Suivez-nous sur</h5>
            <div className="row gp-0">
              <div className="col">
                <a href="#" target="_blank" rel="noopener noreferrer" className="lien-sociaux"><FaFacebookF title="Facebook" /></a>
              </div>
              <div className="col">
                <a href="#" target="_blank" rel="noopener noreferrer" className="lien-sociaux"><FaLinkedinIn title="LinkedIn" /></a>
              </div>
              <div className="col">
                <a href="#" target="_blank" rel="noopener noreferrer" className="lien-sociaux"><FaInstagram title="Instagram" /></a>
              </div>
              <div className="col">
                <a href="#" target="_blank" rel="noopener noreferrer" className="lien-sociaux"><FaYoutube title="YouTube" /></a>
              </div>
            </div>
          </div>

          <div className='box text-center'>
              <div className="legal1">
                <a href="#" className="lien-dev1" target="_blank" rel="noopener noreferrer"><span>Qui sommes-nous ?</span></a>
              </div>
              <div className="legal1">
                <a href="#" className="lien-dev1" target="_blank" rel="noopener noreferrer"><span>Politiques de confidentialité</span></a>
              </div>
              <div className="legal1">
                <a href="#" className="lien-dev1" target="_blank" rel="noopener noreferrer"><span>Terme et condition d'utilisation</span></a>
              </div>
          </div>
          <div className='box'>
            <div className="text-center">
              <h5>Contacts</h5>
              <div className="row">
                <ul>
                  <li> <Phone/> +261 32 27 361 26</li>
                  <li> <Phone/> +261 32 11 361 26</li>
                  <li> <Mail/> contact@immomadaocea.com</li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <h5>Adresse</h5>
              <div className="row">
                <ul>
                  <li> <MapPin/>Rue Boulevard d'Andovoranto Lot 32 p/lle 13/72, Campus Barikadimy, Toamasina 501, Madagascar.</li>
                </ul>
              </div>
            </div>
              
          </div>
        </div>
      </footer>
      <div className='legal'>
        <a href="#" className="lien-dev" target="_blank" rel="noopener noreferrer"><span>© 2025 Developped by LK technologie | All rights reserved.</span></a>
      </div>
    </div>
  )
}

export default Footer;