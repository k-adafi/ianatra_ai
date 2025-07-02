import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGoogle } from 'react-icons/fa';

import { 
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile
} from "firebase/auth";
import { auth, googleProvider } from "../Firebase/firebaseConfig.js";
import { Eye, EyeOff, ChevronRight, User, Lock, Mail, ChevronLeft } from "lucide-react";
import '../style/connexion.css';
import 'bootstrap/dist/css/bootstrap.css';

const steps = [
  { id: 'Informations', name: 'Informations personnelles' },
  { id: 'Compte', name: 'Création de compte' },
  { id: 'Confirmation', name: 'Confirmation' }
];

function Inscription() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
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
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '', general: '' });
  };

  const validateStep = (step) => {
    let isValid = true;
    const newErrors = { ...errors };

    if (step === 0) {
      if (!formData.nom.trim()) {
        newErrors.nom = "Le nom est requis";
        isValid = false;
      }

      if (!formData.prenom.trim()) {
        newErrors.prenom = "Le prénom est requis";
        isValid = false;
      }
    }

    if (step === 1) {
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
    }

    setErrors(newErrors);
    return isValid;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        formData.email, 
        formData.password
      );
      
      await updateProfile(userCredential.user, {
        displayName: `${formData.prenom} ${formData.nom}`
      });

      await auth.currentUser.reload();
      setSuccess(true);
      
      setTimeout(() => {
        navigate('/acceuil');
      }, 2000);
    } catch (error) {
      console.error("Erreur d'inscription:", error);
      let errorMessage = "Erreur lors de l'inscription";
      
      switch(error.code) {
        case 'auth/email-already-in-use':
          errorMessage = "Cet email est déjà utilisé";
          break;
        case 'auth/invalid-email':
          errorMessage = "Email invalide";
          break;
        case 'auth/weak-password':
          errorMessage = "Le mot de passe doit contenir au moins 6 caractères";
          break;
        default:
          errorMessage = error.message;
      }
      
      setErrors({...errors, general: errorMessage});
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => { 
    try { 
      setLoading(true); 
      await signInWithPopup(auth, googleProvider);
      navigate('/acceuil'); 
    } catch (error) {
      console.error("Erreur Google:", error);
      setErrors({ ...errors, general: error.message }); 
    } finally { 
      setLoading(false); 
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
            <h2>Créer un compte</h2>
            <p>Rejoignez notre plateforme d'éducation intelligente.</p>
          </div>

          {/* Stepper */}
          <div className="stepper mb-4">
            <div className="stepper-progress">
              <div 
                className="stepper-progress-bar" 
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>
            <div className="stepper-steps">
              {steps.map((step, index) => (
                <div 
                  key={step.id} 
                  className={`stepper-step ${index <= currentStep ? 'active' : ''}`}
                >
                  <div className="stepper-step-circle">{index + 1}</div>
                  <div className="stepper-step-label d-none d-sm-block">{step.name}</div>
                </div>
              ))}
            </div>
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

          {success ? (
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
              <h4 className="text-success">Compte créé avec succès !</h4>
              <p>Redirection en cours...</p>
            </motion.div>
          ) : (
            <form className="auth-form" onSubmit={handleEmailSignUp}>
              {/* Step 1: Personal Info */}
              {currentStep === 0 && (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="prenom" className="d-flex align-items-center">
                          <User size={18} className="me-2" />
                          Prénom
                        </label>
                        <input 
                          type="text" 
                          id="prenom"
                          name="prenom" 
                          placeholder="Votre prénom"
                          value={formData.prenom} 
                          onChange={handleChange} 
                          className={`form-control ${errors.prenom ? 'is-invalid' : ''}`}
                          required 
                        />
                        {errors.prenom && <div className="invalid-feedback">{errors.prenom}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="nom" className="d-flex align-items-center">
                          <User size={18} className="me-2" />
                          Nom
                        </label>
                        <input 
                          type="text" 
                          id="nom"
                          name="nom" 
                          placeholder="Votre nom"
                          value={formData.nom} 
                          onChange={handleChange} 
                          className={`form-control ${errors.nom ? 'is-invalid' : ''}`}
                          required 
                        />
                        {errors.nom && <div className="invalid-feedback">{errors.nom}</div>}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Account Info */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
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
                      value={formData.email} 
                      onChange={handleChange} 
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      required 
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="password" className="d-flex align-items-center">
                      <Lock size={18} className="me-2" />
                      Mot de passe
                    </label>
                    <div className="input-group">
                      <input 
                        type={showPassword ? "text" : "password"} 
                        id="password"
                        name="password" 
                        placeholder="••••••••"
                        value={formData.password} 
                        onChange={handleChange} 
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        required 
                      />
                      <button 
                        type="button" 
                        className="btn btn-outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirmPassword" className="d-flex align-items-center">
                      <Lock size={18} className="me-2" />
                      Confirmer le mot de passe
                    </label>
                    <div className="input-group">
                      <input 
                        type={showConfirmPassword ? "text" : "password"} 
                        id="confirmPassword"
                        name="confirmPassword" 
                        placeholder="••••••••"
                        value={formData.confirmPassword} 
                        onChange={handleChange} 
                        className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                        required 
                      />
                      <button 
                        type="button" 
                        className="btn btn-outline-secondary"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Confirmation */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="confirmation-step"
                >
                  <div className="confirmation-card p-4 mb-4">
                    <h5 className="mb-3">Récapitulatif</h5>
                    <div className="confirmation-item mb-2">
                      <span className="text-muted">Nom complet:</span>
                      <span>{formData.prenom} {formData.nom}</span>
                    </div>
                    <div className="confirmation-item mb-2">
                      <span className="text-muted">Email:</span>
                      <span>{formData.email}</span>
                    </div>
                  </div>
                  <div className="form-check mb-3">
                    <input 
                      type="checkbox" 
                      className="form-check-input" 
                      id="termsCheck" 
                      required
                    />
                    <label className="form-check-label" htmlFor="termsCheck">
                      J'accepte les conditions d'utilisation et la politique de confidentialité
                    </label>
                  </div>
                </motion.div>
              )}

              <div className="d-flex justify-content-between mt-4">
                {currentStep > 0 ? (
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary"
                    onClick={prevStep}
                    disabled={loading}
                  >
                    <ChevronLeft size={18} className="me-1" />
                    Précédent
                  </button>
                ) : (
                  <div></div>
                )}

                {currentStep < steps.length - 1 ? (
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={nextStep}
                    disabled={loading}
                  >
                    Suivant <ChevronRight size={18} className="ms-1" />
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Création en cours...
                      </>
                    ) : "Finaliser l'inscription"}
                  </button>
                )}
              </div>

              <div className="auth-footer mt-4">
                <p>Vous avez déjà un compte ? <a href="/connexion">Se connecter</a></p>
              </div>

              <div className="auth-divider">
                <span>Ou continuer avec</span>
              </div>

              <button 
                type="button" 
                className="btn btn-google w-100 auth-btn"
                onClick={handleGoogleSignUp}
                disabled={loading}
              >
                <FaGoogle /> Google
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Inscription;