import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      // Simuler une connexion
      setTimeout(() => {
        setLoading(false);
        navigate('/dashboard');
      }, 1500);
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

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email"
                name="email" 
                placeholder="admin@example.com"
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

            <div className="form-options">
              <div className="form-check">
                <input type="checkbox" id="remember" className="form-check-input" />
                <label htmlFor="remember" className="form-check-label">Se souvenir de moi</label>
              </div>
              <a href="/forgot-password" className="forgot-password">Mot de passe oublié ?</a>
            </div>
            
            <button type="submit" className="btn btn-primary w-100 auth-btn" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Connexion en cours...
                </>
              ) : "Se connecter"}
            </button>

            <div className="auth-divider">
              <span>Ou continuer avec</span>
            </div>

            <button type="button" className="btn btn-outline-secondary w-100 auth-btn">
              <i className="bi bi-google me-2"></i> Google
            </button>

            <div className="auth-footer">
              <p>Vous n'avez pas de compte ? <a href="/inscription">S'inscrire</a></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Connexion;