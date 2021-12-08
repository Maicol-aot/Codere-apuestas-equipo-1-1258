import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";




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