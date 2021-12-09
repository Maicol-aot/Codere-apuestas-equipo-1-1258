import './App.css';

import VistaEventos from './pages/VistaEventos';
import VistaUsuarios from './pages/VsitaUsuarios';
import VistaDashboard from './pages/VistaDashboard';
import VistaPerfil from './pages/VistaPerfil';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // V6 -> nuevos cambios

import Feed from './pages/Feed';
import Registro from './pages/Registro';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage'



function App() {

  const lista_datos = [
    {id:"1", equipo1:"Galaxy", equipo2:"Trompers", liga:"Liga diamante", estado:"Activo"},
    {id:"2", equipo1:"Monties", equipo2:"Atlanta", liga:"Liga de oro", estado:"Activo"},
    {id:"3", equipo1:"Growls", equipo2:"Rockets", liga:"Liga alemana", estado:"Cerrado"},
    {id:"4", equipo1:"Greenland", equipo2:"Sky", liga:"Liga alemana", estado:"Activo"},
    {id:"5", equipo1:"Deportivo tapitas", equipo2:"Galaxy", liga:"Liga Codere", estado:"Activo"}

  ];

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
        <Route path="/feed" element={<Feed eventos = { lista_datos }/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
