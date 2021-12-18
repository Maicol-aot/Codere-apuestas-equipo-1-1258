import react from "react";
import Usuario from "./Usuario";


const ListaUsuarios = (props)=>{
    const Usuarios =props.Usuarios;
    const ListaUsers = Usuarios.map ( p =>
        <Usuario 
            nombre = {p.nombre}
            primerApellido ={p.primerApellido}
            id = {p.id_usuario}
            username = {p.usrname}
            tipouser={p.rol}
        
        />);

        



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
                                            {ListaUsers}
                                            
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