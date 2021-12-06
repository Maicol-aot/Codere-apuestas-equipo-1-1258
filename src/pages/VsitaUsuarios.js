import react from "react";
import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";
import GestionarUsuarios from "../components/GestionarUsuarios";
import Footer from "../components/Footer";


const VistaUsuario = () =>{
    return(
        <div>
            <AdminNavbar />
            <Sidebar />
            <GestionarUsuarios />
            <Footer />
        </div>
    )
}

export default VistaUsuario;