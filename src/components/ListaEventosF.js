import React  from "react";
import Paginator from "./Paginator";
import SearchBar from "./SearchBar";

const ListaEventosF =() =>{
    return(
        <>

                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-body"> 
                                    
                                    {/* Table with stripped rows  */}
                                    <table className="table datatable">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Nombre del Evento</th>
                                                <th scope="col">Detalles</th>
                                                <th scope="col">ID del Evento</th>
                                                <th scope="col">Fecha de Finalizacíon</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Estrellas vs romers</td>
                                                <td><td><a href="#" className="btn btn-primary">Ver Detalles</a></td></td>
                                                <td>28562</td>
                                                <td>2016-05-25</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Alcaide vs Persas</td>
                                                <td><td><a href="#" className="btn btn-primary">Ver Detalles</a></td></td>
                                                <td>35454</td>
                                                <td>2014-12-05</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Ashton vs Dinm</td>
                                                <td><td><a href="#" className="btn btn-primary">Ver Detalles</a></td></td>
                                                <td>45012</td>
                                                <td>2011-08-12</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Angles vs Vectors</td>
                                                <td><a href="#" className="btn btn-primary">Ver Detalles</a></td>
                                                <td>34454</td>
                                                <td>2012-06-11</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>Rars vs Polos</td>
                                                <td><td><a href="#" className="btn btn-primary">Ver Detalles</a></td></td>
                                                <td>44557</td>
                                                <td>2011-04-19</td>
                                            </tr>
                                        </tbody>
                                        
                                    </table>
                                    {/* End Table with stripped rows */}
                                    {/* <Paginator /> */}
                                </div>
                            </div>

                        </div>
                       
                    </div>
                    
                </section>


        </>
    )


}


export default ListaEventosF;