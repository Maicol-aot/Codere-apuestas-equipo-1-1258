import React from 'react';
import CambiarClave from '../../forms/CambiarClave';
import EditarPerfil from '../../forms/EditarPerfil';
import InfoUsuario from './InfoUsuario';


const DatosUsuario = [
    { nombre: "Victor", primerApellido: "Vigna", segundoApellido:"Roa", fechaNacimiento:"16/09/1996", _id:"004", numeroDocumento:"1336986",lugarExpdicion:"Bogotá",fechaExpedicion:"21/09/2014",email:"vicvig@gmail.com",municipio:"Colombia",movil:"3012569856",usrname:"victorvv",rol:"user"}
    
  ]; //meter variable de sesion que me traiga los datos del usuario.
const Perfil = () =>{

    
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
                                    <h2> kevin algo</h2>
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

                                        <InfoUsuario Datos ={DatosUsuario}/>

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

export default Perfil;