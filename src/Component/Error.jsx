import '../style/error.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import img404 from '../assets/images/404.svg'
// import { Navbar, Nav, Container, Button, Offcanvas } from "react-bootstrap";

function Error() {
  return (
    <div className="block">
        <h1 className="titre-block">Oups...</h1>
        <img className="img-block" src={img404} alt="" />
        <h2 className="soustitre-block">
            Il semblerait que la page que vous cherchez n’existe pas
        </h2>
        <Link className="btn btn-link" to="/">Retour à la page d'acceuil</Link>
    </div>
  )
}

export default Error;