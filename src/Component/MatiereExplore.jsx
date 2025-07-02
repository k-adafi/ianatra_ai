import React from 'react'
import '../style/matiere_explore.css';
import '../style/historique.css';
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
  SquareRadical
} from 'lucide-react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MatiereExplore() {

  const matieres = [
    { nom: "Mathématiques", icon: <SquareRadical size={24}/>, color: "#F44336", path: "/math" },
    { nom: "Physique", icon: <Atom size={24} />, color: "#673AB7", path: "/physique" },
    { nom: "SVT", icon: <Leaf size={24} />, color: "#009688", path: "/SVT" },
    { nom: "Malagasy", icon: <BookOpen size={24} />, color: "#4CAF50", path: "/malagasy" },
    { nom: "Histoire", icon: <Landmark size={24} />, color: "#9C27B0", path: "/histoire" },
    { nom: "Géographie", icon: <Globe2 size={24} />, color: "#2196F3", path: "/geographie" },
    { nom: "Philosophie", icon: <Brain size={24} />, color: "#795548", path: "/philosophie" },
    { nom: "Anglais", icon: <Languages size={24} />, color: "#E91E63", path: "/anglais" },
    { nom: "Français", icon: <BookText size={24} />, color: "#3F51B5", path: "/francais" },
    { nom: "Allemand", icon: <BookText size={24} />, color: "#3F51B5", path: "/allemand" },
    { nom: "Espagnol", icon: <BookText size={24} />, color: "#3F51B5", path: "/espagnol" },
    { nom: "Informatique de base", icon: <BookText size={24} />, color: "#3F51B5", path: "/informatique" },
    { nom: "EPS", icon: <BookText size={24} />, color: "#FF5722", path: "/EPS" },
    { nom: "Education civique", icon: <Scale size={24} />, color: "#FF9800", path: "/civique" },
    { nom: "Education au droit de l'Homme", icon: <Scale size={24} />, color: "#FF9800", path: "/EDH" },
    
  ];

  return (
    <Container className="matiere-explore-container">
      <div className="row">
        <div className="col">
          <Link to="/acceuil" className='btn-history'><CircleArrowLeft /></Link>
        </div>
        <div className="col">
          <h2 className="text-center mb-4">Explorez les modules</h2>
        </div>
      </div>
      <hr />
      <Row xs={1} sm={2} md={3} lg={4} className="g-4 mt-5">
        {matieres.map((matiere, index) => (
          <Col key={index}>
            <Link to={matiere.path}>
              <Card 
                className="matiere-card h-100"
                style={{ borderLeft: `5px solid ${matiere.color}` }}
              >
                <Card.Body className="d-flex flex-column align-items-center">
                  <div 
                    className="matiere-icon mb-3"
                    style={{ color: matiere.color }}
                  >
                    {matiere.icon}
                  </div>
                  <Card.Title className="text-cente matiere-text">{matiere.nom}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MatiereExplore;