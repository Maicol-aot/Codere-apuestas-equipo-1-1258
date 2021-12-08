import React from 'react';
import {Link} from "react-router-dom";

const RegistroNavBar = () => {
    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <link href="/assets/css/NavBar.css" rel="stylesheet"/>
            <link href="/assets/css/styleMaicol.css" rel="stylesheet"/>

            <div className="d-flex align-items-center justify-content-between">
                <Link to="/" className="logo d-flex align-items-center">
                <img src="assets/img/SponsorsLogo.png" alt="Codere logo"/>
                </Link>
                <Link to="/" href="https://github.com/Maicol-aot/Codere-apuestas-equipo-1-1258"><span class="d-none d-lg-block">Contactenos</span></Link>
                
            </div>{/*{/*<!-- End Logo -->*/}   
        {/*{/*<!-- End Header -->*/}
        </header>
    );
};

export default RegistroNavBar;