import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () =>{
    return(
        <>
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Dashboard</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </nav>
                </div>{/*{/*<!-- End Page Title -->*/}

                <section className="section dashboard">
                    <div className="row">

                        {/*{/*<!-- Left side columns -->*/}
                        <div className="col-lg-8">
                            <div className="row">

                               
                                <div className="col-xxl-6 col-md-6"> {/*{/*<!-- Eventos activos -->*/}
                                    <div className="card info-card sales-card">

                                        

                                        <div className="card-body">
                                            <h5 className="card-title">Eventos Activos </h5>
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-calendar4-event"></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6>145</h6>
                                                    <div className="filter">
                                                        <Link to="GestionarEventos" className="icon" ><i class="bi bi-cursor-fill"></i></Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>{/*{/*<!-- final eventos activos -->*/}
                               

                                
                                <div className="col-xxl-6 col-xl-12">{/*{/*<!-- Clientes Activos -->*/}

                                    <div className="card info-card customers-card">

                                         <div className="filter"> {/*goto */}
                                            <Link to="GestionarUsuarios" className="icon" ><i class="bi bi-cursor-fill"></i></Link>
                                            
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title">Clientes Activos </h5>

                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-people"></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6>1244</h6>
                                                    <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">disminución</span>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>{/*{/*<!-- final clientes activos -->*/}

                                <div className="col-xxl-6 col-xl-12"> {/*{/*<!-- Menores ganancias-->*/}
                                    <div className="card info-card low-income">

                                        <div className="filter">
                                            <Link to="#" className="icon" ><i class="bi bi-cursor-fill"></i></Link>
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title">Menores Ganancias </h5>

                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-currency-dollar"></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6>$5'862.795</h6>
                                                    <span className="text-danger small pt-1 fw-bold">ID del Evento</span> <span className="text-muted small pt-2 ps-1">98659</span>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div className="col-xxl-6 col-md-6">{/*{/*<!-- Mayores ganancias-->*/}
                                    <div className="card info-card revenue-card">

                                    <div className="filter">
                                            <Link to="#" className="icon" ><i class="bi bi-cursor-fill"></i></Link>
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title"> Mayores Ganancias</h5>

                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-currency-dollar"></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6>$31'562.264</h6>
                                                    <span className="text-success small pt-1 fw-bold">ID del Evento</span> <span className="text-muted small pt-2 ps-1">98592</span>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

            

                                
                                <div className="col-12">{/*{/*<!-- Tabla de recaudos -->*/}
                                    <div className="card recent-sales">

                                        <div className="card-body">
                                            <h5 className="card-title">Recaudos <span>| Today</span></h5>

                                            <table className="table table-borderless datatable">
                                                <thead>
                                                    <tr style={{ textAlign: "center" }}>
                                                        <th scope="col">ID del Evento</th>
                                                        <th scope="col">Nombre del Evento</th>
                                                        <th scope="col">Fecha de Cierre</th>
                                                        <th scope="col">Ganancias</th>
                                                       
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr style={{ textAlign: "center" }}>
                                                        <th scope="row"><a href="#">#24547</a></th>
                                                        <td>Books vs lyons</td>
                                                        <td>06/12/21</td>
                                                        <td>$6.234.123</td>
                                                    
                                                    </tr>
                                                    <tr style={{ textAlign: "center" }}>
                                                        <th scope="row"><a href="#">#21447</a></th>
                                                        <td>Bridie vs Keflers</td> 
                                                        <td >18/09/21</td>
                                                        <td>$4.569.236</td>
                                                        
                                                    </tr>
                                                    <tr style={{ textAlign: "center" }}>
                                                        <th scope="row"><a href="#">#20449</a></th>
                                                        <td>Ashleigh vs Langosh</td>
                                                        <td>25/11/21</td>
                                                        <td>$3.306.258</td>
                                                       
                                                    </tr>
                                                    <tr style={{ textAlign: "center" }}>
                                                        <th scope="row"><a href="#">#26414</a></th>
                                                        <td>Angusber vs Gradyson</td>
                                                        <td>30/10/21</td>
                                                        <td>$1.363.367</td>
                                                        
                                                    </tr>
                                                    <tr style={{ textAlign: "center" }}>
                                                        <th scope="row"><a href="#">#26244</a></th>
                                                        <td>Raheem city vs Lehner town</td>
                                                        <td>29/11/21</td>
                                                        <td>$10.256.896</td>
                                                        
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>

                                    </div>
                                </div>{/*{/*<!-- End Recent Sales -->*/}

                            </div>
                        </div>{/*{/*<!-- End Left side columns -->*/}

                        {/*{/*<!-- Right side columns -->*/}
                        <div className="col-lg-4">

                            {/*{/*<!-- Budget Report -->*/}
                            <div className="card">
                                <div className="filter">
                                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                        <li className="dropdown-header text-start">
                                            <h6>Filter</h6>
                                        </li>

                                        <li><a className="dropdown-item" href="#">Today</a></li>
                                        <li><a className="dropdown-item" href="#">This Month</a></li>
                                        <li><a className="dropdown-item" href="#">This Year</a></li>
                                    </ul>
                                </div>

                                <div className="card-body pb-0">
                                    <h5 className="card-title">Budget Report <span>| This Month</span></h5>

                                    <div id="budgetChart" className="echart" style={{ height: '400px' }}>
                                    </div>

                                    

                                </div>
                            </div>{/*{/*<!-- End Budget Report -->*/}                           

                        </div>{/*{/*<!-- End Right side columns -->*/}

                    </div>
                </section>

            </main>{/*{/*<!-- End #main -->*/}

        </>
    );
};

export default Dashboard;