import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaChalkboardTeacher, 
  FaUserGraduate, 
  FaBrain, 
  FaGlobeAfrica 
} from 'react-icons/fa';
import { GiBookshelf } from 'react-icons/gi';
import { 
  BookOpen, 
  Globe2, 
  Landmark, 
  Scale, 
  Atom, 
  Leaf, 
  Brain, 
  Languages, 
  BookText, 
  Backpack,
  CircleArrowLeft,
  ChevronRight,
  SquareRadical
} from 'lucide-react';
import video from '../assets/videos/video2.mp4';
import '../style/home.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};


  const subjects = [
    { name: "Mathématiques", icon: <SquareRadical size={24}/>, color: "#F44336", path: "/math" },
    { name: "Physique", icon: <Atom size={24} />, color: "#673AB7", path: "/physique" },
    { name: "SVT", icon: <Leaf size={24} />, color: "#009688", path: "/SVT" },
    { name: "Malagasy", icon: <BookOpen size={24} />, color: "#4CAF50", path: "/malagasy" },
    { name: "Histoire", icon: <Landmark size={24} />, color: "#9C27B0", path: "/histoire" },
    { name: "Géographie", icon: <Globe2 size={24} />, color: "#2196F3", path: "/geographie" },
    { name: "Philosophie", icon: <Brain size={24} />, color: "#795548", path: "/philosophie" },
    { name: "Anglais", icon: <Languages size={24} />, color: "#E91E63", path: "/anglais" },
    { name: "Français", icon: <BookText size={24} />, color: "#3F51B5", path: "/francais" },
    { name: "Allemand", icon: <BookText size={24} />, color: "#3F51B5", path: "/allemand" },
    { name: "Espagnol", icon: <BookText size={24} />, color: "#3F51B5", path: "/espagnol" },
    { name: "Informatique de base", icon: <BookText size={24} />, color: "#3F51B5", path: "/informatique" },
    { name: "EPS", icon: <BookText size={24} />, color: "#FF5722", path: "/EPS" },
    { name: "Education civique", icon: <Scale size={24} />, color: "#FF9800", path: "/civique" },
    { name: "Education au droit de l'Homme", icon: <Scale size={24} />, color: "#FF9800", path: "/EDH" },
    
  ];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      {/* Hero Section avec vidéo en arrière-plan */}
      <div className="video-background-container">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="background-video"
        >
          <source src={video} type="video/mp4" />
          Votre navigateur ne supporte pas les vidéos HTML5.
        </video>
        
        <section className="hero-section">
          <div className="container">
            <motion.div 
              className="hero-content"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 
                className="hero-title"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                <span className="highlight">ianatraAI</span> - L'éducation intelligente pour Madagascar
              </motion.h1>
              <motion.p 
                className="hero-subtitle"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                La première intelligence artificielle dédiée à l'enseignement du programme scolaire malgache,
                du collège au lycée.
              </motion.p>
              <motion.div 
                className="cta-buttons"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <button 
                  className="btn btn-primary btn-lg me-3"
                  onClick={() => navigate('/connexion')}
                >
                  S'identifier
                </button>
                <button 
                  className="btn btn-secondary btn-lg"
                  onClick={() => navigate('/inscription')}
                >
                  S'enregistrer
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Section Problématique */}
      <section className="problem-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <motion.h2 
                className="section-title"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Le défi éducatif malgache
              </motion.h2>
              <motion.p 
                className="lead"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                À Madagascar, le système éducatif fait face à des défis majeurs : 
                insuffisance d'accès, inégalités flagrantes et décrochage scolaire précoce.
              </motion.p>
              <motion.ul 
                className="problem-list"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.li variants={fadeInUp}>
                  <span className="problem-icon">✖</span> Manque de ressources pédagogiques approprié
                </motion.li>
                <motion.li variants={fadeInUp}>
                  <span className="problem-icon">✖</span> Manque d´accompagnemet scolaire
                </motion.li>
                <motion.li variants={fadeInUp}>
                  <span className="problem-icon">✖</span> Accès limité aux enseignants qualifiés
                </motion.li>
                <motion.li variants={fadeInUp}>
                  <span className="problem-icon">✖</span> Absence d'outils numériques adaptés
                </motion.li>
              </motion.ul>
            </div>
            <div className="col-lg-6">
              <motion.div 
                className="problem-image"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* <img src={imgblm} alt="blem" /> */}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Solution */}
      <section className="solution-section py-5">
        <div className="container">
          <motion.div 
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Notre solution innovante</h2>
            <p className="section-subtitle">
              ianatraAI comble le fossé éducatif avec une approche technologique adaptée
            </p>
          </motion.div>
          
          <motion.div 
            className="row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="col-md-6 col-lg-4 mb-4"
              variants={fadeInUp}
            >
              <div className="solution-card">
                <div className="solution-icon">
                  <FaChalkboardTeacher size={32} />
                </div>
                <h3>Support pour enseignants</h3>
                <p>
                  Outils pédagogiques complets pour enrichir les cours et suivre la progression des élèves.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="col-md-6 col-lg-4 mb-4"
              variants={fadeInUp}
            >
              <div className="solution-card">
                <div className="solution-icon">
                  <FaUserGraduate size={32} />
                </div>
                <h3>Accompagnement des élèves</h3>
                <p>
                  Cours interactifs, exercices auto-corrigés et suivi personnalisé pour chaque élève.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="col-md-6 col-lg-4 mb-4"
              variants={fadeInUp}
            >
              <div className="solution-card">
                <div className="solution-icon">
                  <GiBookshelf size={32} />
                </div>
                <h3>Programme officiel</h3>
                <p>
                  Contenu aligné sur le curriculum du Ministère de l'Éducation Nationale malgache.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="col-md-6 col-lg-4 mb-4"
              variants={fadeInUp}
            >
              <div className="solution-card">
                <div className="solution-icon">
                  <FaBrain size={32} />
                </div>
                <h3>Adaptation intelligente</h3>
                <p>
                  Algorithmes qui s'ajustent au rythme et niveau de chaque utilisateur.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="col-md-6 col-lg-4 mb-4"
              variants={fadeInUp}
            >
              <div className="solution-card">
                <div className="solution-icon">
                  <FaGlobeAfrica size={32} />
                </div>
                <h3>Accessibilité</h3>
                <p>
                  Disponible sur tous les appareils, même avec une connexion limitée.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Matières */}
      <section className="subjects-section py-5 bg-light">
        <div className="container">
          <motion.h2 
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Toutes les matières couvertes
          </motion.h2>
          <motion.div 
            className="subject-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {subjects.map((subject, index) => (
              <motion.div 
                key={index}
                className="subject-item"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div 
                    className="matiere-icon mb-3"
                    style={{ color: subject.color }}
                  >
                    {subject.icon}
                </div>
                {subject.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section CTA finale */}
      <section className="final-cta py-5">
        <div className="container text-center">
          <motion.h2 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Prêt à révolutionner votre apprentissage ?
          </motion.h2>
          <motion.p 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Rejoignez la communauté ianatraAI et accédez à une éducation de qualité,
            peu importe votre situation géographique ou sociale.
          </motion.p>
          <motion.button 
            className="btn btn-primary btn-lg px-5"
            onClick={() => navigate('/inscription')}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            S'inscrire gratuitement <ChevronRight size={20} className="ms-2" />
          </motion.button>
        </div>
      </section>
    </div>
  );
}

export default Home;