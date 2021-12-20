

import VistaEventos from './pages/VistaEventos';
import VistaEvento from './pages/VistaEvento';
import VistaUsuarios from './pages/VsitaUsuarios';
import VistaDashboard from './pages/VistaDashboard';
import VistaPerfil from './pages/VistaPerfil';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // V6 -> nuevos cambios

import Feed from './pages/Feed';
import Registro from './pages/Registro';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage'

import { useEffect, useState } from 'react';



function App() {

  //const [usuarioSesion, setUsuarioSesion] = useState(null);
  
  const usuarioSesion = localStorage.getItem('admin'); //este aparece como null
  
  //let setUsuarioSesion = true;

  return (
    <BrowserRouter>
      <Routes>

        {!usuarioSesion &&( //si el parametro es false renderiza el login
          <Route 
            path="/login" 
            element={<Login />} 
          />
        )}

        {usuarioSesion &&( //si es true renderiza el feed
          <Route path="/feed" element={<Feed />}/>
        )}


       { <Route path="*" element={<Navigate to={usuarioSesion? "/feed" : "/login"} />} /> }



        <Route path="/feed" element={<Feed />}/>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<VistaDashboard />} />
        <Route path="/gestionarEventos" element={< VistaEventos/>} />
        <Route path="/evento" element={< VistaEvento/>} />
        <Route path="/gestionarUsuarios" element={<VistaUsuarios />} />
        <Route path="/perfilAdmin"element={<VistaPerfil />}/>
        <Route path="/registro" element={<Registro />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
