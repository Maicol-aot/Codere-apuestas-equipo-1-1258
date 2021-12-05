import React from 'react';

const RegistroNavBar = () => {
    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <link href="/assets/css/NavBar.css" rel="stylesheet"/>

            <div className="d-flex align-items-center justify-content-between">
                <a href="dashboard.html" className="logo d-flex align-items-center">
                <img src="assets/img/SponsorsLogo.png" alt="Codere logo"/>
                </a>
                <a href="https://github.com/Maicol-aot/Codere-apuestas-equipo-1-1258"><span class="d-none d-lg-block">Contactenos</span></a>
                
            </div>{/*{/*<!-- End Logo -->*/}   
        {/*{/*<!-- End Header -->*/}
        </header>
    );
};

export default RegistroNavBar;