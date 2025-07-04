import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaCheckCircle, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
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

const quizzes = [
  {
    id: 1,
    title: "Mathématiques",
    description: "Aidez-nous à améliorer nos ressources en mathématiques",
    questions: [
      {
        id: 1,
        text: "Quelle est la partie des mathématiques qui vous pose le plus de difficultés ?",
        type: "multiple-choice",
        options: [
          "Algèbre",
          "Géométrie",
          "Analyse",
          "Probabilités",
          "Statistiques"
        ]
      },
      {
        id: 2,
        text: "Quel type d'exercices souhaiteriez-vous voir plus développés ?",
        type: "multiple-choice",
        options: [
          "Problèmes concrets",
          "Exercices théoriques",
          "QCM d'application",
          "Démonstrations",
          "Exercices interactifs"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Sciences Physiques",
    description: "Partagez votre expérience avec les sciences physiques",
    questions: [
      {
        id: 1,
        text: "Quel domaine de la physique trouvez-vous le plus difficile à comprendre ?",
        type: "multiple-choice",
        options: [
          "Mécanique",
          "Électricité",
          "Optique",
          "Thermodynamique",
          "Physique quantique"
        ]
      },
      {
        id: 2,
        text: "Quel type de support visuel vous aide le plus à comprendre les concepts physiques ?",
        type: "multiple-choice",
        options: [
          "Schémas animés",
          "Vidéos explicatives",
          "Expériences réelles filmées",
          "Graphiques et diagrammes",
          "Illustrations statiques"
        ]
      }
    ]
  }
];

function AiderNousAmeliorer() {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const currentQuiz = quizzes[currentQuizIndex];
  const currentQuestion = currentQuiz.questions[currentQuestionIndex];

  const handleOptionSelect = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentQuizIndex < quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setCurrentQuestionIndex(0);
    } else {
      setIsSubmitted(true);
      // Ici, vous pourriez envoyer les réponses à votre API
      console.log("Réponses soumises:", answers);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentQuizIndex > 0) {
      setCurrentQuizIndex(currentQuizIndex - 1);
      setCurrentQuestionIndex(quizzes[currentQuizIndex - 1].questions.length - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuizIndex(0);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsSubmitted(false);
  };

  const progress = ((currentQuizIndex * currentQuiz.questions.length + currentQuestionIndex + 1) / 
                   (quizzes.length * currentQuiz.questions.length)) * 100;

  if (isSubmitted) {
    return (
      <motion.div 
        className="container py-5 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          variants={fadeInUp}
          className="success-card p-5 bg-white rounded-lg shadow-lg"
        >
          <FaCheckCircle className="text-success mb-4" size={64} />
          <h2 className="mb-4">Merci pour votre contribution !</h2>
          <p className="mb-4">
            Vos réponses nous aideront à améliorer ianatraAI pour mieux répondre à vos besoins éducatifs.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <motion.button
              className="btn btn-primary"
              onClick={handleRestart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Recommencer les quiz
            </motion.button>
            <motion.button
              className="btn btn-outline-primary"
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Retour à l'accueil
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="welcome-page">
      <section className="py-5">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-5" variants={fadeInUp}>
              <h2 className="section-title">Aidez-nous à améliorer ianatraAI</h2>
              <p className="section-subtitle">
                Vos réponses nous permettront d'affiner nos contenus et de mieux répondre à vos besoins
              </p>
            </motion.div>

            <motion.div className="progress mb-4" variants={fadeInUp}>
              <div 
                className="progress-bar bg-gradient-primary" 
                role="progressbar" 
                style={{ width: `${progress}%` }}
                aria-valuenow={progress} 
                aria-valuemin="0" 
                aria-valuemax="100"
              ></div>
            </motion.div>

            <motion.div 
              className="quiz-card bg-white p-4 rounded-lg shadow-sm"
              variants={fadeInUp}
            >
              <div className="quiz-header mb-4">
                <h3 className="text-primary">{currentQuiz.title}</h3>
                <p className="text-muted">{currentQuiz.description}</p>
                <div className="d-flex justify-content-between mt-2">
                  <small className="text-muted">
                    Question {currentQuestionIndex + 1}/{currentQuiz.questions.length}
                  </small>
                  <small className="text-muted">
                    Quiz {currentQuizIndex + 1}/{quizzes.length}
                  </small>
                </div>
              </div>

              <motion.div 
                className="quiz-question mb-4"
                key={currentQuestion.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="mb-4">{currentQuestion.text}</h4>
                
                <div className="options-container">
                  {currentQuestion.options.map((option, index) => (
                    <motion.div
                      key={index}
                      className={`option-item p-3 mb-2 rounded ${
                        answers[currentQuestion.id] === option ? 'option-selected' : ''
                      }`}
                      onClick={() => handleOptionSelect(currentQuestion.id, option)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {option}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <div className="quiz-navigation d-flex justify-content-between">
                <motion.button
                  className="btn btn-outline-primary"
                  onClick={handlePreviousQuestion}
                  disabled={currentQuizIndex === 0 && currentQuestionIndex === 0}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaChevronLeft className="me-2" />
                  Précédent
                </motion.button>
                
                <motion.button
                  className="btn btn-primary"
                  onClick={handleNextQuestion}
                  disabled={!answers[currentQuestion.id]}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {currentQuestionIndex === currentQuiz.questions.length - 1 && 
                  currentQuizIndex === quizzes.length - 1 ? (
                    "Soumettre"
                  ) : (
                    <>
                      Suivant <FaChevronRight className="ms-2" />
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AiderNousAmeliorer;