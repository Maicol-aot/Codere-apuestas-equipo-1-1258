import React from 'react';

const NavBar = () => {
    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <link href="/assets/css/NavBar.css" rel="stylesheet"/>

            <div className="d-flex align-items-center justify-content-between">
                <a href="dashboard.html" className="logo d-flex align-items-center">
                <img src="assets/img/SponsorsLogo.png" alt="Codere logo"/>
                </a>
                <a href="https://github.com/Maicol-aot/Codere-apuestas-equipo-1-1258"><span class="d-none d-lg-block">Contactenos</span></a>
                
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

                    <li className="nav-item dropdown">
                        <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                            
                            <h6><i className="bi bi-currency-dollar"></i>0</h6>
                        </a>{/*{/*<!-- End Notification Icon -->*/}
                    </li>{/*{/*<!-- End Notification Nav -->*/}

                    <li className="nav-item dropdown pe-3">

                        <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-person-circle"></i> {/*{/*<!-- Icono usuario -->*/}
                        
                        </a>{/*{/*<!-- End Profile Iamge Icon -->*/}

                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li className="dropdown-header">
                                <span>Nombre usuario</span>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>

                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                <i className="bi bi-person"></i>
                                <span>Perfil de Usuario</span>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>

                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                <i className="bi bi-currency-dollar"></i>
                                <span>Depositar</span>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>

                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                <i className="bi bi-dash-circle"></i>
                                <span>Retirar</span>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>

                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="">
                                <i className="bi bi-collection"></i>
                                <span>Mis apuestas</span>
                                </a>
                            </li>

                            <li>
                                <hr className="dropdown-divider"/>
                            </li>

                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="">
                                    <i className="bi bi-box-arrow-right"></i>
                                    <span>Cerrar sesion</span>
                                </a>
                            </li>

                        </ul>
                        {/*{/*<!-- End Profile Dropdown Items -->*/}
                    </li>
                    {/*{/*<!-- End Profile Nav -->*/}

                </ul>
            </nav>
            {/*{/*<!-- End Icons Navigation -->*/}
        
        {/*{/*<!-- End Header -->*/}
        </header>
        
    );
};

export default NavBar;
