import react from "react";

const ListaUsuarios = ()=>{
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
                                                <th scope="col">ID</th>
                                                <th scope="col">Nombre de Usuario</th>
                                                <th scope="col">Nombre Completo</th>
                                                <th scope="col">Tipo de Usuario</th>
                                                <th scope="col">Accion</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>myke89</td>                                           
                                                <td>Miguel Torres</td>
                                                <td>Usuario</td>
                                                <td><td><a href="#" className="btn btn-danger">Eliminar</a></td></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>alex23</td>                                             
                                                <td>Alexander Gil</td>
                                                <td>Administrador</td>
                                                <td><td><a href="#" className="btn btn-danger">Eliminar</a></td></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Robert26 </td>                                    
                                                <td>Roberto Morales</td>
                                                <td>Interno</td>
                                                <td><td><a href="#" className="btn btn-danger">Eliminar</a></td></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>taylors</td>                         
                                                <td>Tatiana Suarez</td>
                                                <td>Usuario</td>
                                                <td><a href="#" className="btn btn-danger">Eliminar</a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>victorv</td>
                                                <td>Victor Vigna</td>
                                                <td>Usuario</td>
                                                <td><td><a href="#" className="btn btn-danger">Eliminar</a></td></td>
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

export default ListaUsuarios;