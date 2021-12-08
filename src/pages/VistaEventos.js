import react from "react";
import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";
import GestionarEventos from "../components/GestionarEventos";
import Footer from "../components/Footer";



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