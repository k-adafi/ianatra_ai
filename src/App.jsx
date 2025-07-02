import './App.css'
import { Route, Routes } from 'react-router-dom'
import ChatEtude from './Component/ChatEtude';
import 'bootstrap/dist/css/bootstrap.min.css';
import Historique from './Component/Historique';
import MatiereExplore from './Component/MatiereExplore';
import Footer from './Component/Footer';
import ChatMalagasy from './Component/ChatMalagasy';
import ChatMath from './Component/ChatMath';
import ChatHistoire from './Component/ChatHistoire';
import ChatGeographie from './Component/ChatGeographie';
import ChatCivique from './Component/ChatCivique';
import ChatPhysique from './Component/ChatPhysique';
import ChatSVT from './Component/ChatSVT';
import ChatPhilo from './Component/ChatPhilo';
import ChatAnglais from './Component/ChatAnglais';
import ChatFrancais from './Component/ChatFrancais';
import ChatEPS from './Component/ChatEPS';
import ChatAllemand from './Component/ChatAllemand';
import ChatEspagnol from './Component/ChatEspagnol';
import ChatEDH from './Component/ChatEDH';
import ChatInformatique from './Component/ChatInformatique';
import Connexion from './Component/Connexion';
import Home from './Component/Home';
import Error from './Component/Error';
import Inscription from './Component/Inscription';
import Header from './Component/Header';
import Compte from './Component/Compte';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/*" element={<Error />} />
        <Route path='/' element={
          <div className='container-fluid'>
            {/* <Header /> */}
            <Home />
            <Footer />
          </div>
        } />
        <Route path='/acceuil' element={
            <div className='affiche-form container-fluid'>
                {/* On garde g-0 pour enlever les gouttières et h-100 pour la hauteur totale */}
                <div className='row g-0 h-100'>
                    {/* 
                        COLONNE GAUCHE : On la transforme en conteneur flex vertical.
                        Historique prendra l'espace disponible, et Compte se placera en bas.
                    */}
                    <div className="col-md-3 col-lg-2 h-100 d-flex flex-column">
                        <Historique />
                        <Compte />
                    </div>
                    
                    {/* 
                        COLONNE DROITE : C'est cette colonne qui doit gérer le défilement.
                        On lui ajoute une classe personnalisée pour appliquer le style `overflow`.
                    */}
                    <div className="col-md-9 col-lg-10 h-100 main-content-area">
                        <ChatEtude />
                    </div>
                </div>
            </div>
        } />
        <Route path='/malagasy' element={
          <div className=' container-fluid h-100'>
            <div className='row g-0 h-100'>
              <div className="col-md-3 col-lg-2 h-100">
                <Historique />
                <Compte />
              </div>
              <div className="col-md-9 col-lg-10 h-100">
                <ChatMalagasy />
              </div>
            </div>
          </div>
        } />
        <Route path='/math' element={
          <div className=' container-fluid h-100'>
            <div className='row g-0 h-100'>
              <div className="col-md-3 col-lg-2 h-100">
                <Historique />
                <Compte />
              </div>
              <div className="col-md-9 col-lg-10 h-100">
                <ChatMath />
              </div>
            </div>
          </div>
        } />
        <Route path='/histoire' element={
          <div className=' container-fluid h-100'>
            <div className='row g-0 h-100'>
              <div className="col-md-3 col-lg-2 h-100">
                <Historique />
                <Compte />
              </div>
              <div className="col-md-9 col-lg-10 h-100">
                <ChatHistoire />
              </div>
            </div>
          </div>
        } />
        <Route path='/geographie' element={
          <div className=' container-fluid h-100'>
            <div className='row g-0 h-100'>
              <div className="col-md-3 col-lg-2 h-100">
                <Historique />
                <Compte />
              </div>
              <div className="col-md-9 col-lg-10 h-100">
                <ChatGeographie />
              </div>
            </div>
          </div>
        } />
        <Route path='/civique' element={
          <div className=' container-fluid h-100'>
            <div className='row g-0 h-100'>
              <div className="col-md-3 col-lg-2 h-100">
                <Historique />
                <Compte />
              </div>
              <div className="col-md-9 col-lg-10 h-100">
                <ChatCivique />
              </div>
            </div>
          </div>
        } />
        <Route path='/EDH' element={
          <div className=' container-fluid h-100'>
            <div className='row g-0 h-100'>
              <div className="col-md-3 col-lg-2 h-100">
                <Historique />
                <Compte />
              </div>
              <div className="col-md-9 col-lg-10 h-100">
                <ChatEDH/>
              </div>
            </div>
          </div>
        } />
        <Route path='/physique' element={
          <div className=' container-fluid h-100'>
            <div className='row g-0 h-100'>
              <div className="col-md-3 col-lg-2 h-100">
                <Historique />
                <Compte />
              </div>
              <div className="col-md-9 col-lg-10 h-100">
                <ChatPhysique />
              </div>
            </div>
          </div>
        } />
        <Route path='/SVT' element={
          <div className=' container-fluid h-100'>
            <div className='row g-0 h-100'>
              <div className="col-md-3 col-lg-2 h-100">
                <Historique />
                <Compte />
              </div>
              <div className="col-md-9 col-lg-10 h-100">
                <ChatSVT />
              </div>
            </div>
          </div>
        } />
        <Route path='/philosophie' element={
          <div className=' container-fluid h-100'>
            <div className='row g-0 h-100'>
              <div className="col-md-3 col-lg-2 h-100">
                <Historique />
                <Compte />
              </div>
              <div className="col-md-9 col-lg-10 h-100">
                <ChatPhilo />
              </div>
            </div>
          </div>
        } />
        <Route path='/anglais' element={
          <div className=' container-fluid h-100'>
            <div className='row g-0 h-100'>
              <div className="col-md-3 col-lg-2 h-100">
                <Historique />
                <Compte />
              </div>
              <div className="col-md-9 col-lg-10 h-100">
                <ChatAnglais />
              </div>
            </div>
          </div>
        } />
        <Route path='/francais' element={
          <div className=' container-fluid h-100'>
            <div className='row g-0 h-100'>
              <div className="col-md-3 col-lg-2 h-100">
                <Historique />
                <Compte />
              </div>
              <div className="col-md-9 col-lg-10 h-100">
                <ChatFrancais />
              </div>
            </div>
          </div>
        } />
        <Route path='/allemand' element={
          <div className=' container-fluid h-100'>
            <div className='row g-0 h-100'>
              <div className="col-md-3 col-lg-2 h-100">
                <Historique />
                <Compte />
              </div>
              <div className="col-md-9 col-lg-10 h-100">
                <ChatAllemand />
              </div>
            </div>
          </div>
        } />
        <Route path='/espagnol' element={
          <div className=' container-fluid h-100'>
            <div className='row g-0 h-100'>
              <div className="col-md-3 col-lg-2 h-100">
                <Historique />
                <Compte />
              </div>
              <div className="col-md-9 col-lg-10 h-100">
                <ChatEspagnol />
              </div>
            </div>
          </div>
        } />
        <Route path='/informatique' element={
          <div className=' container-fluid h-100'>
            <div className='row g-0 h-100'>
              <div className="col-md-3 col-lg-2 h-100">
                <Historique />
                <Compte />
              </div>
              <div className="col-md-9 col-lg-10 h-100">
                <ChatInformatique />
              </div>
            </div>
          </div>
        } />
        <Route path='/EPS' element={
          <div className=' container-fluid h-100'>
            <div className='row g-0 h-100'>
              <div className="col-md-3 col-lg-2 h-100">
                <Historique />
                <Compte />
              </div>
              <div className="col-md-9 col-lg-10 h-100">
                <ChatEPS />
              </div>
            </div>
          </div>
        } />
        <Route path='/modules' element={
          <div className='row'>
            <MatiereExplore />
            <Footer />
          </div>
        } />
        <Route path='/connexion' element={
          <div className='row'>
            <div className="container">
              <Connexion />
            </div>
            <Footer />
          </div>
        } />
        <Route path='/inscription' element={
          <div className='row'>
            <div className="container">
              <Inscription />
            </div>
            <Footer />
          </div>
        } />
      </Routes>
    </div>
  )
}

export default App