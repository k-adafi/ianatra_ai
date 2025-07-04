import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGoogle } from 'react-icons/fa';
import { 
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail 
} from "firebase/auth";
import { auth, googleProvider } from "../Firebase/firebaseConfig.js";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import '../style/connexion.css';
import 'bootstrap/dist/css/bootstrap.css';
import { GoOrganization } from "react-icons/go";
import google from "../assets/images/google.png";

function Connexion() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    showPassword: false
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    general: ''
  });

  const [loading, setLoading] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    setErrors({ ...errors, [name]: '', general: '' });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '', general: '' };

    if (!credentials.email) {
      newErrors.email = "L'adresse email est requise";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      newErrors.email = "L'adresse email est invalide";
      isValid = false;
    }

    if (!credentials.password && !showResetForm) {
      newErrors.password = "Le mot de passe est requis";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
      navigate('/acceuil');
    } catch (error) {
      console.error("Erreur de connexion:", error);
      let errorMessage = "Email ou mot de passe incorrect";
      
      switch(error.code) {
        case 'auth/user-not-found':
          errorMessage = "Aucun compte trouvé avec cet email";
          break;
        case 'auth/wrong-password':
          errorMessage = "Mot de passe incorrect";
          break;
        case 'auth/invalid-email':
          errorMessage = "Email invalide";
          break;
        case 'auth/too-many-requests':
          errorMessage = "Trop de tentatives. Compte temporairement bloqué";
          break;
        default:
          errorMessage = error.message;
      }
      
      setErrors({...errors, general: errorMessage});
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, googleProvider);
      navigate('/acceuil');
    } catch (error) {
      console.error("Erreur Google:", error);
      setErrors({
        ...errors,
        general: error.message || "Erreur lors de la connexion avec Google"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!credentials.email) {
      setErrors({...errors, email: "Entrez votre email pour réinitialiser"});
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      setErrors({...errors, email: "Email invalide"});
      return;
    }
    
    try {
      await sendPasswordResetEmail(auth, credentials.email);
      setResetEmailSent(true);
    } catch (error) {
      console.error("Erreur de réinitialisation:", error);
      setErrors({
        ...errors, 
        general: error.message || "Erreur lors de l'envoi de l'email"
      });
    }
  };

  return (
    <motion.section 
      className="auth-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="auth-container">
        <motion.div 
          className="auth-card"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="auth-header">
            <h2>{showResetForm ? 'Réinitialisation' : 'Connexion'}</h2>
            <p>
              {showResetForm 
                ? resetEmailSent 
                  ? "Un email de réinitialisation a été envoyé" 
                  : "Entrez votre email pour réinitialiser votre mot de passe"
                : "Bienvenue de retour ! Veuillez vous connecter à votre compte."}
            </p>
          </div>

          {errors.general && (
            <motion.div 
              className="alert alert-danger"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              {errors.general}
            </motion.div>
          )}

          {resetEmailSent ? (
            <motion.div
              className="text-center py-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <div className="success-animation mb-3">
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                  <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                  <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
              </div>
              <h4 className="text-success">Email envoyé !</h4>
              <p>Vérifiez votre boîte de réception à l'adresse {credentials.email}</p>
              <button 
                className="btn btn-link"
                onClick={() => {
                  setShowResetForm(false);
                  setResetEmailSent(false);
                }}
              >
                Retour à la connexion
              </button>
            </motion.div>
          ) : (
            <form className="auth-form" onSubmit={handleEmailLogin}>
              <div className="form-group">
                <label htmlFor="email" className="d-flex align-items-center">
                  <Mail size={18} className="me-2" />
                  Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  placeholder="exemple@email.com"
                  value={credentials.email} 
                  onChange={handleChange} 
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  required 
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              {!showResetForm && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="form-group">
                    <label htmlFor="password" className="d-flex align-items-center">
                      <Lock size={18} className="me-2" />
                      Mot de passe
                    </label>
                    <div className="input-group">
                      <input 
                        type={credentials.showPassword ? "text" : "password"} 
                        id="password"
                        name="password" 
                        placeholder="••••••••"
                        value={credentials.password} 
                        onChange={handleChange} 
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        required 
                      />
                      <button 
                        type="button" 
                        className="btn btn-outline-secondary"
                        onClick={() => setCredentials({...credentials, showPassword: !credentials.showPassword})}
                      >
                        {credentials.showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  </div>
                </motion.div>
              )}

              {!showResetForm ? (
                <>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-check">
                      <input 
                        type="checkbox" 
                        className="form-check-input" 
                        id="rememberMe"
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Se souvenir de moi
                      </label>
                    </div>
                    <button 
                      type="button" 
                      className="btn btn-oublier p-0"
                      onClick={() => setShowResetForm(true)}
                    >
                      Mot de passe oublié ?
                    </button>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary w-100 auth-btn" 
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Connexion en cours...
                      </>
                    ) : (
                      <>
                        Se connecter <ArrowRight size={18} className="ms-2" />
                      </>
                    )}
                  </button>
                </>
              ) : (
                <>
                  <button 
                    type="button" 
                    className="btn btn-primary w-100 auth-btn mb-2" 
                    onClick={handleResetPassword}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Envoi en cours...
                      </>
                    ) : "Envoyer le lien de réinitialisation"}
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary w-100"
                    onClick={() => setShowResetForm(false)}
                  >
                    Annuler
                  </button>
                </>
              )}

              <div className="auth-footer mt-3">
                <p>Vous n'avez pas de compte ? <a href="/inscription">S'inscrire</a></p>
              </div>

              {!showResetForm && (
                <>
                  <div className="auth-divider">
                    <span>Ou continuer avec</span>
                  </div>

                  <button 
                    type="button" 
                    className="btn btn-google w-100 auth-btn"
                    onClick={handleGoogleLogin}
                    disabled={loading}
                  >
                    <img className="me-2" src={google} alt="" />
                    Google
                  </button>
                </>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Connexion;