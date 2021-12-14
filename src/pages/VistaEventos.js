import react from "react";
import AdminNavbar from "../components/General/AdminNavbar";
import Sidebar from "../components/General/Sidebar";
import GestionarEventos from "../components/Eventos/GestionarEventos";
import Footer from "../components/General/Footer";



const VistaEventos = () =>{
    return(
        <div>
            <link href="/assets/css/Footer.css" rel="stylesheet"/>
            <AdminNavbar />
            <Sidebar />
            <GestionarEventos />
            <Footer />
        </div>
    )
}

export default VistaEventos;