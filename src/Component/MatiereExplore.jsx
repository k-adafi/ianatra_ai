import '../style/matiere_explore.css';
import { motion } from 'framer-motion';
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
  ChevronRight,
  ArrowLeft,
  SquareRadical
} from 'lucide-react';
import { Link } from 'react-router-dom';


const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
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

function MatiereExplore() {
  const matieres = [
    { nom: "Mathématiques", icon: <SquareRadical size={28}/>, color: "#F44336", path: "/math" },
    { nom: "Physique", icon: <Atom size={28} />, color: "#673AB7", path: "/physique" },
    { nom: "SVT", icon: <Leaf size={28} />, color: "#009688", path: "/SVT" },
    { nom: "Malagasy", icon: <BookOpen size={28} />, color: "#4CAF50", path: "/malagasy" },
    { nom: "Histoire", icon: <Landmark size={28} />, color: "#9C27B0", path: "/histoire" },
    { nom: "Géographie", icon: <Globe2 size={28} />, color: "#2196F3", path: "/geographie" },
    { nom: "Philosophie", icon: <Brain size={28} />, color: "#795548", path: "/philosophie" },
    { nom: "Anglais", icon: <Languages size={28} />, color: "#E91E63", path: "/anglais" },
    { nom: "Français", icon: <Languages size={28} />, color: "#3F51B5", path: "/francais" },
    { nom: "Allemand", icon: <Languages size={28} />, color: "#3F51B5", path: "/allemand" },
    { nom: "Espagnol", icon: <Languages size={28} />, color: "#3F51B5", path: "/espagnol" },
    { nom: "Informatique de base", icon: <BookText size={28} />, color: "#3F51B5", path: "/informatique" },
    { nom: "EPS", icon: <BookText size={28} />, color: "#FF5722", path: "/EPS" },
    { nom: "Education civique", icon: <Scale size={28} />, color: "#FF9800", path: "/civique" },
    { nom: "Education au droit de l'Homme", icon: <Scale size={28} />, color: "#FF9800", path: "/EDH" },
  ];

  return (
    <motion.div 
      className="subject-explore-container"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="container">
        <div className="subject-explore-header">
          <Link to="/acceuil" className="subject-explore-back-btn">
            <ArrowLeft size={24} />
          </Link>
          <motion.h2 
            className="subject-explore-title"
            variants={fadeInUp}
          >
            Explorez les modules
          </motion.h2>
        </div>

        <motion.div 
          className="subject-explore-grid"
          variants={staggerContainer}
        >
          {matieres.map((matiere, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to={matiere.path} 
                className="subject-explore-link"
                aria-label={`Explorer ${matiere.nom}`}
              >
                <div 
                  className="subject-explore-card"
                  style={{ '--subject-color': matiere.color }}
                >
                  <div className="subject-explore-icon">
                    {matiere.icon}
                  </div>
                  <h3 className="subject-explore-name">{matiere.nom}</h3>
                  <ChevronRight className="subject-explore-arrow" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default MatiereExplore;