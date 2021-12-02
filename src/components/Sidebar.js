import React from 'react';

const Sidebar = () =>{
    return(
        <>
            {/*{/*<!-- ======= Sidebar ======= -->*/}
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">

                    <li className="nav-item">
                        <a className="nav-link " href="dashboard.html">
                            <i className="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>{/*{/*<!-- End Dashboard Nav -->*/}

                    <li className="nav-item">
                        <a className="nav-link collapsed" href="users-profile.html">
                            <i className="bi bi-layout-text-sidebar-reverse"></i>
                            <span>Gestionar Eventos </span> {/*<!-- info del perfil -->*/}
                        </a>
                    </li>
                    {/*{/*<!-- End Profile Page Nav -->*/}

                    <li className="nav-item">
                        <a className="nav-link collapsed" href="pages-faq.html">
                            <i className="bi bi-person"></i>
                            <span>Gestionar Usuarios</span>
                        </a>
                    </li>
                    {/*{/*<!-- End F.A.Q Page Nav -->*/}

                    <li className="nav-item">
                        <a className="nav-link collapsed" href="pages-contact.html">
                            <i className="bi bi-cash"></i>
                            <span>Recaudos</span>
                        </a>
                    </li>
                    {/*{/*<!-- End Contact Page Nav -->*/}

                </ul>

            </aside>
            {/*{/*<!-- End Sidebar-->*/}


        </>
    );
};

export default Sidebar;