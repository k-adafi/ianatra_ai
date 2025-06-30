import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../style/connexion.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Inscription() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
    confirmPassword: '',
    general: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '', general: '' });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.nom.trim()) {
      newErrors.nom = "Le nom est requis";
      isValid = false;
    }

    if (!formData.prenom.trim()) {
      newErrors.prenom = "Le prénom est requis";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "L'adresse email est requise";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'adresse email est invalide";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Le mot de passe est requis";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Le mot de passe doit contenir au moins 6 caractères";
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      // Simuler une inscription
      setTimeout(() => {
        setLoading(false);
        navigate('/connexion');
      }, 1500);
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h2>Créer un compte</h2>
            <p>Rejoignez notre plateforme d'éducation intelligente.</p>
          </div>

          {errors.general && <div className="alert alert-danger">{errors.general}</div>}

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="nom">Nom</label>
                  <input 
                    type="text" 
                    id="nom"
                    name="nom" 
                    value={formData.nom} 
                    onChange={handleChange} 
                    className={`form-control ${errors.nom ? 'is-invalid' : ''}`}
                    required 
                  />
                  {errors.nom && <div className="invalid-feedback">{errors.nom}</div>}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="prenom">Prénom</label>
                  <input 
                    type="text" 
                    id="prenom"
                    name="prenom" 
                    value={formData.prenom} 
                    onChange={handleChange} 
                    className={`form-control ${errors.prenom ? 'is-invalid' : ''}`}
                    required 
                  />
                  {errors.prenom && <div className="invalid-feedback">{errors.prenom}</div>}
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email"
                name="email" 
                placeholder="exemple@email.com"
                value={formData.email} 
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
                value={formData.password} 
                onChange={handleChange}
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                required 
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
              <input 
                type="password" 
                id="confirmPassword"
                name="confirmPassword" 
                placeholder="••••••••"
                value={formData.confirmPassword} 
                onChange={handleChange}
                className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                required 
              />
              {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
            </div>
            
            <button type="submit" className="btn btn-primary w-100 auth-btn" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Inscription en cours...
                </>
              ) : "S'inscrire"}
            </button>

            <div className="auth-divider">
              <span>Ou continuer avec</span>
            </div>

            <button type="button" className="btn btn-outline-secondary w-100 auth-btn">
              <i className="bi bi-google me-2"></i> Google
            </button>

            <div className="auth-footer">
              <p>Vous avez déjà un compte ? <a href="/connexion">Se connecter</a></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Inscription;