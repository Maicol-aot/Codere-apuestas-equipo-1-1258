import './App.css';

import VistaEventos from './pages/VistaEventos';
import VistaUsuarios from './pages/VsitaUsuarios';
import VistaDashboard from './pages/VistaDashboard';
import VistaPerfil from './pages/VistaPerfil';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // V6 -> nuevos cambios



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VistaDashboard />} />
        <Route path="/GestionarEventos" element={< VistaEventos/>} />
        <Route path="/GestionarUsuarios" element={<VistaUsuarios />} />
        <Route path="/PerfilAdmin"element={<VistaPerfil />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
