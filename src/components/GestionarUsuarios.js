import React from 'react';
import SearchBar from './SearchBar';
import Paginator from './Paginator';
import ListaUsuarios from './ListaUsuarios';
import CrearUsuario from '../forms/CrearUsuario'

const ListaDatosUsuarios = [
    { nombre: "Victor", primerApellido: "Vigna", segundoApellido:"Roa", fechaNacimiento:"16/09/1996", id:"004", numeroDocumento:"1336986",lugarExpdicion:"Bogotá",fechaExpedicion:"21/09/2014",email:"vicvig@gmail.com",pais:"Colombia",telefono:"3012569856",username:"victorvv",tipouser:"user"},
    { nombre: "Ana", primerApellido: "Smith", segundoApellido:"White", fechaNacimiento:"01/02/2000", id:"002", numeroDocumento:"36528961",lugarExpdicion:"Medellin",fechaExpedicion:"09/02/2018",email:"anasmithgmail.com",pais:"Colombia",telefono:"3014569696",username:"asmith",tipouser:"user"},
    { nombre: "Lina", primerApellido: "Ali", segundoApellido:"Ruiz", fechaNacimiento:"26/11/1994", id:"005", numeroDocumento:"59632517",lugarExpdicion:"Barranquilla",fechaExpedicion:"01/12/2013",email:"linaali@gmail.com",pais:"Colombia",telefono:"3014562369",username:"lali",tipouser:"interno"},
    { nombre: "Juan", primerApellido: "Perez", segundoApellido:"Rois", fechaNacimiento:"06/07/1999", id:"003", numeroDocumento:"36598625",lugarExpdicion:"Cali",fechaExpedicion:"15/06/2018",email:"juanpe",pais:"Colombia",telefono:"3014569632",username:"Jperez",tipouser:"interno"},
    { nombre: "kevin", primerApellido: "Anderson", segundoApellido:"Felix", fechaNacimiento:"19/02/1990", id:"001", numeroDocumento:"1140369568",lugarExpdicion:"Barranquilla",fechaExpedicion:"15/09/2015",email:"kevanderson@email.com",pais:"Colombia",telefono:"3163652598",username:"kanderson",tipouser:"admin"},

  ];




const GestionarUsuarios = () =>{
    return(
        <>
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Gestionar Usuarios</h1>
                    <nav>
                        <ol className="breadcrumb">

                        </ol>
                    </nav>
                </div>{/*<!-- End Page Title -->*/}

                <section className="section profile">
                    <div className="row">


                        <div className="col-xl-8">

                            <div className="card">
                                <div className="card-body pt-3">
                                    {/*<!-- Bordered Tabs -->*/}
                                    <ul className="nav nav-tabs nav-tabs-bordered">

                                        <li className="nav-item">
                                            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#Usuarios">Usuarios</button>
                                        </li>

                                        <li className="nav-item">
                                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#Crear-usuario">Crear Usuario</button>
                                        </li>

                                    </ul>
                                    <div className="tab-content pt-2">
                                        
                                        <div className="tab-pane fade show active Usuarios" id="Usuarios">
                                            <br/>
                                            <SearchBar/>
                                            <br/>
                                            <ListaUsuarios Usuarios ={ListaDatosUsuarios}/>
                                            <Paginator/>

                        

                                        </div>
                                        

                                        <div className="tab-pane fade Crear-usuario pt-3" id="Crear-usuario">

                                            {/*<!-- crear usuarios Edit Form -->*/}
                                            <CrearUsuario/>

                                        </div>



                                    </div>{/*<!-- End Bordered Tabs -->*/}

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>


        </>
    );
};

export default GestionarUsuarios;