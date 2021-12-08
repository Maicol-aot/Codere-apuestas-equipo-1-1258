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
        <Route path="/Dashboard" element={<VistaDashboard />} />
        <Route path="/GestionarEventos" element={< VistaEventos/>} />
        <Route path="/GestionarUsuarios" element={<VistaUsuarios />} />
        <Route path="/PerfilAdmin"element={<VistaPerfil />}/>
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
