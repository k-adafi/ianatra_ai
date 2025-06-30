import React, { useState } from "react";
import '../style/header.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, Offcanvas } from "react-bootstrap";
import logo from '../assets/Logo/logo_long_bleu.png';

function Header() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  // Fonction pour gérer le clic et le défilement
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    handleClose(); // Pour fermer l'Offcanvas mobile si ouvert
  };

  return (
    <>
      
      {/* Version desktop */}
      <header className="d-none d-lg-block header-style">
        <div className="container d-flex justify-content-between align-items-center pb-4">
          <div className="d-flex align-items-center">
            <Link to="/" onClick={handleLinkClick}>
              <img src={logo} alt="Logo" className="logo me-3" />
            </Link>
          </div>
          <nav className="d-flex justify-content-end align-items-center">
            <Link to="connexion" onClick={handleLinkClick} className="mx-3 nav-link nav-style">Se connecter</Link>
            <Link to="/inscription" onClick={handleLinkClick} className="mx-3 nav-link nav-style">S'inscrire</Link>
          </nav>
        </div>
      </header>

      {/* Version mobile */}
      <Navbar expand="lg" className="d-lg-none bg-white">
        <Container fluid>
          <Link to="/" onClick={handleLinkClick} className="navbar-brand">
            <img src="/images/logo.png" alt="Logo" width={170} className="logo" />
          </Link>
          <Button 
            variant="outline-secondary" 
            onClick={handleShow}
            className="border-0"
            aria-label="Ouvrir le menu"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          
          <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column">
                <Nav.Link as={Link} to="/" onClick={handleLinkClick} className="nav-style mb-2">Accueil</Nav.Link>
                <Nav.Link as={Link} to="/apropos" onClick={handleLinkClick} className="nav-style mb-2">À propos</Nav.Link>
                <Nav.Link as={Link} to="/annonces" onClick={handleLinkClick} className="nav-style mb-2">Nos publications</Nav.Link>
                <Nav.Link as={Link} to="/services-listes" onClick={handleLinkClick} className="nav-style mb-2">Nos services</Nav.Link>
                <Nav.Link as={Link} to="/contacts" onClick={handleLinkClick} className="nav-style mb-2">Contactez-nous</Nav.Link>
                <Nav.Link as={Link} to="/favoris" onClick={handleLinkClick} className="nav-style mb-2">⭐</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;