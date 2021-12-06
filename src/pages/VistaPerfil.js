import react from "react";
import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import PerfilAdmin from "../components/PerfilAdmin";



const VistaPerfil = () =>{
    return(
        <div>
            <AdminNavbar />
            <Sidebar />
            <PerfilAdmin />
            <Footer />
        </div>
    )
}

export default VistaPerfil;