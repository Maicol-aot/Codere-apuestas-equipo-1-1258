import React from "react";
import AdminNavbar from "../components/General/AdminNavbar";
import Sidebar from "../components/General/Sidebar";
import Dashboard from "../components/General/Dashboard";
import Footer from "../components/General/Footer";




const VistaDashboard = () =>{
    return(
        <div>
            <link href="/assets/css/Footer.css" rel="stylesheet"/>
            <AdminNavbar />
            <Sidebar />
            <Dashboard />
            <Footer />
        </div>
    )
}

export default VistaDashboard;