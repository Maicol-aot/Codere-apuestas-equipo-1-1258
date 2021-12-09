import React from 'react';
import CambiarClave from './CambiarClave';
import EditarPerfil from './EditarPerfil';

const PerfilAdmin = () =>{
    return(
        <>
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Perfil</h1>
                </div>{/*<!-- End Page Title -->*/}

                <section className="section profile">
                    <div className="row">
                        <div className="col-xl-4">

                            <div className="card">
                                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                                    <img src="assets/img/super_admin.png" alt="Profile" className="rounded-circle"/>
                                    <h2>Kevin Anderson</h2>
                                    <h3>Administrador</h3>
                                    
                                </div>
                            </div>

                        </div>

                        <div className="col-xl-8">

                            <div className="card">
                                <div className="card-body pt-3">
                                    {/*<!-- Bordered Tabs -->*/}
                                    <ul className="nav nav-tabs nav-tabs-bordered">

                                        <li className="nav-item">
                                            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">General</button>
                                        </li>

                                        <li className="nav-item">
                                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Editar perfil</button>
                                        </li>

                                        <li className="nav-item">
                                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Cambiar contraseña</button>
                                        </li>

                                    </ul>
                                    <div className="tab-content pt-2">

                                        <div className="tab-pane fade show active profile-overview" id="profile-overview">

                                            <h5 className="card-title">Detalles</h5>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label ">Nombre completo</div>
                                                <div className="col-lg-9 col-md-8">Kevin Anderson</div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Usuario</div>
                                                <div className="col-lg-9 col-md-8">k_anderson</div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Codigo de empleado</div>
                                                <div className="col-lg-9 col-md-8">535022</div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Tipo de usuario</div>
                                                <div className="col-lg-9 col-md-8">Administrador</div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Pais de residencia</div>
                                                <div className="col-lg-9 col-md-8">Colombia</div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Telefono</div>
                                                <div className="col-lg-9 col-md-8">(436) 486-3538 x29071</div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Email</div>
                                                <div className="col-lg-9 col-md-8">k.anderson@example.com</div>
                                            </div>

                                        </div>

                                        <div className="tab-pane fade profile-edit pt-3" id="profile-edit">

                                            {/*<!-- Profile Edit Form -->*/}
                                            <EditarPerfil/>
                                            {/*<!-- End Profile Edit Form -->*/}

                                        </div>

                                        

                                        

                                        <div className="tab-pane fade pt-3" id="profile-change-password">
                                            {/*<!-- Change Password Form -->*/}
                                            <CambiarClave/>
                                            {/*<!-- End Change Password Form -->*/}

                                        </div>

                                    </div>{/*<!-- End Bordered Tabs -->*/}

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>{/*<!-- End #main -->*/}

            

        </>
    );
};

export default PerfilAdmin;