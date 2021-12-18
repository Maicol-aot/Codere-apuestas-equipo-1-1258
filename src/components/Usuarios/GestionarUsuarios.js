import React from 'react';
import { useEffect, useState } from 'react';
import SearchBar from '../General/SearchBar';
import Paginator from '../General/Paginator';
import ListaUsuarios from './ListaUsuarios';
import CrearUsuario from '../../forms/CrearUsuario' //"../../" para entrar a otra subcarpeta.




const GestionarUsuarios = () =>{
    const [allData, setAllData] =  useState([]); 

    useEffect(() =>{
        obtenerUsuarios()
    }, [])

    const obtenerUsuarios = async () =>{
        const data = await fetch('http://localhost:9000/listaUsuarios')
        const users = await data.json()
        console.log(users)
        setAllData(users)
        
    }
   
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
                                            <ListaUsuarios Usuarios ={allData}/>
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