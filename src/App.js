

import VistaEventos from './pages/VistaEventos';
import VistaEvento from './pages/VistaEvento';
import VistaUsuarios from './pages/VsitaUsuarios';
import VistaDashboard from './pages/VistaDashboard';
import VistaPerfil from './pages/VistaPerfil';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // V6 -> nuevos cambios

import Feed from './pages/Feed';
import Registro from './pages/Registro';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage'
import VistaContacto from './pages/VistaContacto.js';




function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<VistaDashboard />} />
        <Route path="/gestionarEventos" element={< VistaEventos/>} />
        <Route path="/evento" element={< VistaEvento/>} />
        <Route path="/gestionarUsuarios" element={<VistaUsuarios />} />
        <Route path="/perfilAdmin"element={<VistaPerfil />}/>
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/contactanos" element={<VistaContacto/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
