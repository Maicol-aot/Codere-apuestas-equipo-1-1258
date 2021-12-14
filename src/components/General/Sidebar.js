import React from 'react';
import {Link} from "react-router-dom";

const Sidebar = () =>{
    return(
        <>
            {/*{/*<!-- ======= Sidebar ======= -->*/}
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">

                    <li className="nav-item">
                        <Link to ="/dashboard" className="nav-link " href="/">
                            <i className="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>{/*{/*<!-- End Dashboard Nav -->*/}

                    <li className="nav-item">
                        <Link to ="/GestionarEventos" className="nav-link collapsed">
                            <i className="bi bi-layout-text-sidebar-reverse"></i>
                            <span>Gestionar Eventos </span> {/*<!-- info del perfil -->*/}
                        </Link>
                    </li>
                    {/*{/*<!-- End Profile Page Nav -->*/}

                    <li className="nav-item">
                        <Link to ="/GestionarUsuarios" className="nav-link collapsed" >
                            <i className="bi bi-person"></i>
                            <span>Gestionar Usuarios</span>
                        </Link>
                    </li>
                    {/*{/*<!-- End F.A.Q Page Nav -->*/}



                </ul>

            </aside>
            {/*{/*<!-- End Sidebar-->*/}


        </>
    );
};

export default Sidebar;