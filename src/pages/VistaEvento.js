import react from "react";
import AdminNavbar from "../components/General/AdminNavbar";
import Sidebar from "../components/General/Sidebar";
import Footer from "../components/General/Footer";
import DetalleEvento from "../components/Eventos/DetalleEvento";




const VistaEvento = () =>{
    return(
        <div>
            <link href="/assets/css/Footer.css" rel="stylesheet"/>
            <AdminNavbar />
            <Sidebar />
            <DetalleEvento />
            <Footer />
        </div>
    )
}

export default VistaEvento;