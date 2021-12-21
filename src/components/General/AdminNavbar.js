import React from 'react';
import {Link} from "react-router-dom";

const DatosUsuario = [
    { nombre: "Victor", primerApellido: "Vigna", segundoApellido:"Roa", 
    fechaNacimiento:"16/09/1996", _id:"004", numeroDocumento:"1336986",
    lugarExpdicion:"Bogotá",fechaExpedicion:"21/09/2014",
    email:"vicvig@gmail.com",ciudad:"Barranquilla",
    movil:"3012569856",usrname:"victorvv",rol:"user"}]
   

const AdminNavbar = () =>{
    
    
    const adminSesion = localStorage.getItem('admin');

    const cerrarSesion = ()=>{
         localStorage.clear();
         alert("Has cerrado la sesion");
    }
    return(
        
        <header id="header" className="header fixed-top d-flex align-items-center">
            
            <div className="d-flex align-items-center justify-content-between">

                
                <Link to ="/dashboard" className="logo d-flex align-items-center">
                    <img src="assets/img/logo.png" alt=""/>
                    <span className="d-none d-lg-block">Codere</span>
                </Link>
            <i className="bi bi-list toggle-sidebar-btn"></i>
            </div>{/*{/*<!-- End Logo -->*/} 
            
            {/* <div className="search-bar">
            <form className="search-form d-flex align-items-center" method="POST" action="#">
                <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
                <button type="submit" title="Search"><i className="bi bi-search"></i></button>
            </form>
            </div> */}
            {/*{/*<!-- End Search Bar -->*/}

            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">

                    <li className="nav-item d-block d-lg-none">
                        <a className="nav-link nav-icon search-bar-toggle " href="#">
                            <i className="bi bi-search"></i>
                        </a>
                    </li>{/*{/*<!-- End Search Icon-->*/}

                    <li className="nav-item dropdown pe-3">

                        <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                            <img src="assets/img/super_admin.png" alt="Profile" className="rounded-circle" />
                            <span className="d-none d-md-block dropdown-toggle ps-2"> {adminSesion}</span>
                        </a>{/*{/*<!-- End Profile Iamge Icon -->*/}

                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li className="dropdown-header">
                                <h6>{DatosUsuario.nombre} {DatosUsuario.primerApellido}</h6>
                                <span>{DatosUsuario.rol}</span>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            {/*{/*<!-- menu_usuario -->*/}
                            <li>
                                <Link to = "/PerfilAdmin" className="dropdown-item d-flex align-items-center">
                                    <i className="bi bi-person"></i>
                                    <span>Mi Perfil</span>
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li>
                                <Link to="/" className="dropdown-item d-flex align-items-center" onClick={cerrarSesion}>
                                    <i className="bi bi-gear"></i>
                                    <span>Cerrar Sesión</span>
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                        </ul>
                        {/*{/*<!-- End Profile Dropdown Items -->*/}
                    </li>
                    {/*{/*<!-- End Profile Nav -->*/}

                </ul>
            </nav>
            {/*{/*<!-- End Icons Navigation -->*/}
        </header>
    );
};


export default AdminNavbar;