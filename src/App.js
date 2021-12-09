import './App.css';

import VistaEventos from './pages/VistaEventos';
import VistaUsuarios from './pages/VsitaUsuarios';
import VistaDashboard from './pages/VistaDashboard';
import VistaPerfil from './pages/VistaPerfil';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // V6 -> nuevos cambios

import Feed from './Feed';
import Registro from './pages/Registro';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage'



function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<VistaDashboard />} />
        <Route path="/gestionarEventos" element={< VistaEventos/>} />
        <Route path="/gestionarUsuarios" element={<VistaUsuarios />} />
        <Route path="/perfilAdmin"element={<VistaPerfil />}/>
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
