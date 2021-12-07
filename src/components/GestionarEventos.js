import React from 'react';
import Paginator from './Paginator';
import ListaEventosF from './ListaEventosF';
import ListaEventosA from './ListaEventosA';
import SearchBar from './SearchBar';

const ListaDatosEventos = [
    { nombreEvento: "Galaxy vs Trompers", id:"15962", fechaI: "11/12/2021" , horaI:'10:25', fechaF: "11/12/2021" , horaF:'10:25'},
    { nombreEvento: "Bots vs Ringos", id:"24896",fechaI: "13/12/2021" , horaI:'03:30', fechaF: "11/12/2021" , horaF:'05:30'},
    { nombreEvento: "Rockets vs Miles", id:"95862", fechaI: "07/12/2021", horaI:'14:55', fechaF: "11/12/2021" , horaF:'16:25'},
    { nombreEvento: "Beers vs Colins", id:"53268", fechaI: "01/12/2021", horaI:'18:25', fechaF: "11/12/2021" , horaF:'20:25'},
    { nombreEvento: "Atalanta vs Dogs", id:"50025", fechaI: "06/12/2021",horaI:'20:15', fechaF: "11/12/2021" , horaF:'22:15'}

  ];

const GestionarEventos = () =>{
    return(
        
        <>
        
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Gestionar Eventos</h1>
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
                                            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#eventos-a">Eventos Activos</button>
                                        </li>

                                        <li className="nav-item">
                                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#eventos-f">Eventos Finalizados</button>
                                        </li>

                                        <li className="nav-item">
                                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#new-event">Crear Evento</button>
                                        </li>

                                    </ul>
                                    <div className="tab-content pt-2">
                                        <div className="tab-pane fade show active eventos-a" id="eventos-a">
                                            <br/>
                                            <SearchBar/>
                                            <br/>
                                            <ListaEventosA Eventos ={ListaDatosEventos}/>
                                            <Paginator />

                                        </div>
                                        <div className="tab-pane fade eventos-f" id="eventos-f">
                                            <br/>
                                            <SearchBar/>
                                            <br/>
                                            <ListaEventosF/>
                                            <Paginator />
                                            

                                        </div>

                                        <div className="tab-pane fade new-event pt-2" id="new-event">  {/*<!-- crear usuario Edit Form -->*/}

                                           
                                            <form>
                                                <div className="row">
                                                </div>
                                                <div className="row">
                                                    
                                                    <div className="col-sm-6 mb-3">
                                                        <label >Nombre del Evento </label>
                                                        <input type="text" className="form-control" id="validationDefault01" placeholder="Introduzca el nombre del evento" required />
                                                    </div>
                                                    <div className="col-sm-3 mb-3">
                                                        <label >Cuota "Gana local" </label>
                                                        <input type="text" className="form-control" id="validationDefault02" placeholder="Introduzca un valor" required />
                                                    </div>
                                                    

                                                </div>

                                                <div className="row">
                                                    
                                                    <div className="col-sm-6 mb-3">
                                                        <label >Nombre de la liga </label>
                                                        <input type="text" className="form-control" id="validationDefault01" placeholder="Introduzca el nombre de la liga" required />
                                                    </div>
                                                    <div className="col-sm-3 mb-3">
                                                        <label >Cuota "Gana Visitante" </label>
                                                        <input type="text" className="form-control" id="validationDefault02" placeholder="Introduzca un valor" required />
                                                    </div>
                                                    

                                                </div>



                                                <div className="row">
                                                    
                                                    <div className="col-sm-3 mb-3">
                                                        <label>Fecha de inicio</label>   
                                                        <input type="date" className="form-control" id="validationDefault01" placeholder="Nombre de usuario" required />
                                                    </div>
                                                    <div className="col-sm-3 mb-3">
                                                        <label>Hora de inicio</label>
                                                        <input type="time" className="form-control" id="validationDefault02" placeholder="contraseña" required />
                                                    </div>
                                                    <div className="col-sm-3 mb-3">
                                                        <label >Cuota "Empate" </label>
                                                        <input type="text" className="form-control" id="validationDefault02" placeholder="Introduzca un valor" required />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    
                                                    <div className="col-sm-3 mb-3">
                                                        <label>Fecha limite de cancelación</label>   
                                                        <input type="date" className="form-control" id="validationDefault01" placeholder="Nombre de usuario" required />
                                                    </div>
                                                    <div className="col-sm-3 mb-3">
                                                        <label>Hora limite de cancelación</label>
                                                        <input type="time" className="form-control" id="validationDefault02" placeholder="contraseña" required />
                                                    </div>
                                                    
                                                </div>



                                                <button className="btn btn-primary" type="submit">Enviar</button>
                                            </form>

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

export default GestionarEventos;