import './App.css'
import { Route, Routes } from 'react-router-dom'
import ChatEtude from './Component/ChatEtude';
import 'bootstrap/dist/css/bootstrap.min.css';
import Historique from './Component/Historique';
import MatiereExplore from './Component/MatiereExplore';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path='/' element={
          <div className='container-fluid h-100'>
            <div className='row g-0 h-100'>
              <div className="col-md-3 col-lg-2 h-100">
                <Historique />
              </div>
              <div className="col-md-9 col-lg-10 h-100">
                <ChatEtude />
              </div>
            </div>
          </div>
        } />
        <Route path='/modules' element={
          <div className='container'>
            <MatiereExplore />
            <Footer/>
          </div>
        } />
      </Routes>
    </div>
  )
}

export default App