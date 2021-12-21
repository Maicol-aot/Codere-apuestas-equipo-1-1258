import React from 'react';

import VistaEventos from './pages/VistaEventos';
import VistaEvento from './pages/VistaEvento';
import VistaUsuarios from './pages/VsitaUsuarios';
import VistaDashboard from './pages/VistaDashboard';
import VistaPerfilUsuario from './pages/VistaPerfilUsuario';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // V6 -> nuevos cambios

import Feed from './pages/Feed';
import Registro from './pages/Registro';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage'
import VistaContacto from './pages/VistaContacto.js';
import VistaPerfilAdmin from './pages/VistaPerfilAdmin';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<VistaDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/feed" element={<Feed />}/> 
        <Route path="/gestionarEventos" element={< VistaEventos/>} />
        <Route path="/evento" element={< VistaEvento/>} />
        <Route path="/gestionarUsuarios" element={<VistaUsuarios />} />
        <Route path="/perfilAdmin"element={<VistaPerfilAdmin />}/>
        <Route path="/perfilUsuario"element={<VistaPerfilUsuario />}/>
        <Route path="/registro" element={<Registro />} />      
        <Route path="/contactanos" element={<VistaContacto/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
