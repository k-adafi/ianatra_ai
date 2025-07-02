import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, Globe2, Landmark, Scale, Atom, Leaf, 
  Brain, Languages, BookText, SquareRadical, ChevronRight
} from 'lucide-react';
import logo from '../assets/Logo/logo_long_bleu.png';
import '../style/chateEtude1.css';

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
      staggerChildren: 0.08
    }
  }
};

const matieres = [
    { nom: "Mathématiques", icon: <SquareRadical size={28}/>, color: "#F44336", path: "/math" },
    { nom: "Physique", icon: <Atom size={28} />, color: "#673AB7", path: "/physique" },
    { nom: "SVT", icon: <Leaf size={28} />, color: "#009688", path: "/svt" },
    { nom: "Malagasy", icon: <BookOpen size={28} />, color: "#4CAF50", path: "/malagasy" },
    { nom: "Histoire", icon: <Landmark size={28} />, color: "#9C27B0", path: "/histoire" },
    { nom: "Géographie", icon: <Globe2 size={28} />, color: "#2196F3", path: "/geographie" },
    { nom: "Philosophie", icon: <Brain size={28} />, color: "#795548", path: "/philosophie" },
    { nom: "Anglais", icon: <Languages size={28} />, color: "#E91E63", path: "/anglais" },
    { nom: "Français", icon: <BookText size={28} />, color: "#3F51B5", path: "/francais" },
    { nom: "Allemand", icon: <BookText size={28} />, color: "#3F51B5", path: "/allemand" },
    { nom: "Espagnol", icon: <BookText size={28} />, color: "#3F51B5", path: "/espagnol" },
    { nom: "Education civique", icon: <Scale size={28} />, color: "#FF9800", path: "/civique" },
];

function ChatEtude() {
  return (
    <motion.div 
      className="subject-selection-page"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="container text-center">
        <motion.div variants={fadeInUp}>
          <img src={logo} alt="ianatraAI Logo" className="subject-selection-logo" />
        </motion.div>
        
        <motion.h1 className="subject-selection-title" variants={fadeInUp}>
          Bonjour ! Sur quelle matière puis-je vous aider aujourd'hui ?
        </motion.h1>

        <motion.div 
          className="subject-selection-grid"
          variants={staggerContainer}
        >
          {matieres.map((matiere, index) => (
            <Link to={matiere.path} key={index} className="subject-selection-link" aria-label={`Apprendre ${matiere.nom}`}>
              <motion.div 
                className="subject-selection-card"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ '--subject-color': matiere.color }}
              >
                <div className="subject-selection-icon mb-3">
                  {matiere.icon}
                </div>
                <span className="subject-selection-name">{matiere.nom}</span>
                <ChevronRight className="subject-selection-arrow" />
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ChatEtude;