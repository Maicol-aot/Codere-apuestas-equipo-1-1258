import React from 'react';
import {Link} from "react-router-dom";

const AdminNavbar = () =>{
    return(
        <header id="header" className="header fixed-top d-flex align-items-center">
            
            <div className="d-flex align-items-center justify-content-between">

                
                <a href="dashboard.html" className="logo d-flex align-items-center">
                    <img src="assets/img/logo.png" alt=""/>
                    <span className="d-none d-lg-block">Codere</span>
                </a>
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
                            <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
                        </a>{/*{/*<!-- End Profile Iamge Icon -->*/}

                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li className="dropdown-header">
                                <h6>Kevin Anderson</h6>
                                <span>Admin</span>
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
                                <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                    <i className="bi bi-gear"></i>
                                    <span>Cerrar Sesión</span>
                                </a>
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