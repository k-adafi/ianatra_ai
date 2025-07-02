import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail 
} from "firebase/auth";
import { auth, googleProvider } from "../Firebase/firebaseConfig.js";
import '../style/connexion.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Connexion() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    general: ''
  });

  const [loading, setLoading] = useState(false);

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

    if (!credentials.password) {
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
      alert(`Un email de réinitialisation a été envoyé à ${credentials.email}`);
    } catch (error) {
      console.error("Erreur de réinitialisation:", error);
      setErrors({
        ...errors, 
        general: error.message || "Erreur lors de l'envoi de l'email"
      });
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h2>Connexion</h2>
            <p>Bienvenue de retour ! Veuillez vous connecter à votre compte.</p>
          </div>

          {errors.general && <div className="alert alert-danger">{errors.general}</div>}

          <form className="auth-form" onSubmit={handleEmailLogin}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
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

            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input 
                type="password" 
                id="password"
                name="password" 
                placeholder="••••••••"
                value={credentials.password} 
                onChange={handleChange} 
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                required 
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            <div className="text-end mb-3">
              <button 
                type="button" 
                className="btn btn-link p-0"
                onClick={handleResetPassword}
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
              ) : "Se connecter"}
            </button>

            <div className="auth-footer">
              <p>Vous n'avez pas de compte ? <a href="/inscription">S'inscrire</a></p>
            </div>

            <div className="auth-divider">
              <span>Ou continuer avec</span>
            </div>

            <button 
              type="button" 
              className="btn btn-outline-secondary w-100 auth-btn"
              onClick={handleGoogleLogin}
              disabled={loading}
            >
              <i className="bi bi-google me-2"></i> Google
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Connexion;