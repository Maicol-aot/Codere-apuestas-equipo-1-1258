import React  from "react";

const ListaEventosA =() =>{
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
                                                <th scope="col">ID del Evento</th>
                                                <th scope="col">Fecha de Inicio</th>
                                                <th scope="col">Accion</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Galaxy vs Trompers</td>                                           
                                                <td>28562</td>
                                                <td>2016/05/25 - 09:45</td>
                                                <td><td><a href="#" className="btn btn-danger">Cerrar</a></td></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Bots vs Ringos</td>                                             
                                                <td>36554</td>
                                                <td>2014/12/05 - 12:30</td>
                                                <td><td><a href="#" className="btn btn-danger">Cerrar</a></td></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Rockets vs Miles </td>                                    
                                                <td>49712</td>
                                                <td>2011/08/12 - 15:25</td>
                                                <td><td><a href="#" className="btn btn-danger">Cerrar</a></td></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Beers vs Colins</td>                         
                                                <td>34316</td>
                                                <td>2012/06/11 - 20:00</td>
                                                <td><a href="#" className="btn btn-danger">Cerrar</a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>Atalanta vs Dogs</td>
                                                <td>44575</td>
                                                <td>2011/04/19 - 16:00</td>
                                                <td><td><a href="#" className="btn btn-danger">Cerrar</a></td></td>
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


export default ListaEventosA;