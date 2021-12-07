import React from 'react';
import IconoUsuario from './IconoUsuario';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <link href="/assets/css/NavBar.css" rel="stylesheet"/>

            <div className="d-flex align-items-center justify-content-between">
                <Link to="/feed" className="logo d-flex align-items-center">
                <img src="assets/img/SponsorsLogo.png" alt="Codere logo"/>
                </Link>
                
                <Link to="/"><span class="d-none d-lg-block">Contactenos</span></Link>
                
            </div>{/*{/*<!-- End Logo -->*/}

            <div className="search-bar">
                <form className="search-form d-flex align-items-center" method="POST" action="#">
                    <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                    <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
                    <label for="date"><i className="bi bi-calendar3"></i></label>
                    <input id="date" type="date"/>
                </form>
            </div>{/*{/*<!-- End Search Bar -->*/}

            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">

                    <li className="nav-item d-block d-lg-none">
                        <a className="nav-link nav-icon search-bar-toggle " href="#">
                        <i className="bi bi-search"></i>
                        </a>
                    </li>{/*{/*<!-- End Search Icon-->*/}

                    

                    <IconoUsuario />

                </ul>
            </nav>

            
            {/*{/*<!-- End Icons Navigation -->*/}
        
        {/*{/*<!-- End Header -->*/}
        </header>
        
    );
};

export default NavBar;
