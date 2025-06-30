import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/home.css';
import { FaChalkboardTeacher, FaUserGraduate, FaBrain, FaGlobeAfrica } from 'react-icons/fa';
import { GiBookshelf } from 'react-icons/gi';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      {/* Hero Section avec message fort */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="highlight">ianatraAI</span> - L'éducation intelligente pour Madagascar
            </h1>
            <p className="hero-subtitle">
              La première intelligence artificielle dédiée à l'enseignement du programme scolaire malgache,
              du collège au lycée.
            </p>
            <div className="cta-buttons">
              <button 
                className="btn btn-primary btn-lg me-3"
                onClick={() => navigate('/connexion')}
              >
                S'identifier
              </button>
              <button 
                className="btn btn-outline-light btn-lg"
                onClick={() => navigate('/inscription')}
              >
                S'enregistrer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Problématique */}
      <section className="problem-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">Le défi éducatif malgache</h2>
              <p className="lead">
                À Madagascar, le système éducatif fait face à des défis majeurs : 
                insuffisance d'accès, inégalités flagrantes et décrochage scolaire précoce.
              </p>
              <ul className="problem-list">
                <li><span className="problem-icon">✖</span> Manque de ressources pédagogiques</li>
                <li><span className="problem-icon">✖</span> Classes surchargées</li>
                <li><span className="problem-icon">✖</span> Accès limité aux enseignants qualifiés</li>
                <li><span className="problem-icon">✖</span> Absence d'outils numériques adaptés</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="problem-image">
                {/* <img src={imgblm} alt="blem" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Solution */}
      <section className="solution-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Notre solution innovante</h2>
            <p className="section-subtitle">
              ianatraAI comble le fossé éducatif avec une approche technologique adaptée
            </p>
          </div>
          
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="solution-card">
                <div className="solution-icon">
                  <FaChalkboardTeacher />
                </div>
                <h3>Support pour enseignants</h3>
                <p>
                  Outils pédagogiques complets pour enrichir les cours et suivre la progression des élèves.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="solution-card">
                <div className="solution-icon">
                  <FaUserGraduate />
                </div>
                <h3>Accompagnement des élèves</h3>
                <p>
                  Cours interactifs, exercices auto-corrigés et suivi personnalisé pour chaque élève.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="solution-card">
                <div className="solution-icon">
                  <GiBookshelf />
                </div>
                <h3>Programme officiel</h3>
                <p>
                  Contenu aligné sur le curriculum du Ministère de l'Éducation Nationale malgache.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="solution-card">
                <div className="solution-icon">
                  <FaBrain />
                </div>
                <h3>Adaptation intelligente</h3>
                <p>
                  Algorithmes qui s'ajustent au rythme et niveau de chaque utilisateur.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="solution-card">
                <div className="solution-icon">
                  <FaGlobeAfrica />
                </div>
                <h3>Accessibilité</h3>
                <p>
                  Disponible sur tous les appareils, même avec une connexion limitée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Matières */}
      <section className="subjects-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Toutes les matières couvertes</h2>
          <div className="subject-grid">
            <div className="subject-item">Mathématiques</div>
            <div className="subject-item">Physique-Chimie</div>
            <div className="subject-item">SVT</div>
            <div className="subject-item">Histoire</div>
            <div className="subject-item">Géographie</div>
            <div className="subject-item">Français</div>
            <div className="subject-item">Anglais</div>
            <div className="subject-item">Allemand</div>
            <div className="subject-item">Espagnol</div>
            <div className="subject-item">Malagasy</div>
            <div className="subject-item">Éducation civique</div>
            <div className="subject-item">Informatique</div>
          </div>
        </div>
      </section>

      {/* Section CTA finale */}
      <section className="final-cta py-5">
        <div className="container text-center">
          <h2 className="mb-4">Prêt à révolutionner votre apprentissage ?</h2>
          <p className="mb-4">
            Rejoignez la communauté ianatraAI et accédez à une éducation de qualité,
            peu importe votre situation géographique ou sociale.
          </p>
          <button 
            className="btn btn-primary btn-lg px-5"
            onClick={() => navigate('/inscription')}
          >
            S'inscrire gratuitement
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;