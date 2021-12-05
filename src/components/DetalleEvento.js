import React from 'react';

const DetalleEvento = () =>{
    return(
        <>
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>ID del Evento</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">89562</a></li>
                            
                        </ol>
                    </nav>
                </div> {/*<!-- End Page Title -->*/}

                <section className="section_event_title">
                    <div className="row align-items-top">
                        <div className="col-lg-6">

                           {/* <!-- Default Card -->*/}
                            <div className="card2 text-center">
                                <div className="card2-body">
                                    <h5 className="card2-title"> Patriotas vs Pelicanos</h5>
                                    Primera división <br/>
                                    21 de nov 17:50
                                </div>
                                
                            </div>
                            
                        </div>
                        

                    </div>
                </section>

            
                <section className="section">
                    <div className="row align-items-top">
                        <div className="col-lg-6">

                           {/* <!-- Default Card -->*/}
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title"> Resultado:</h5>
                                    Patriotas 5 - PELICANOS 3
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Participantes </h5>
                                    76
                                </div>
                                <div className="card-body">
                                    <a href="#" className="btn btn-primary">Ver Participantes</a>
                                    <h5 className="card-title">Total Recaudado</h5>
                                    $6'986.625
                                </div>
                            </div>
                            
                            {/* <!--  End Default Card  -->*/}

                           

                        </div>

                    </div>
                </section>

            </main>
            
                
        
        </>
    );
};

export default DetalleEvento;