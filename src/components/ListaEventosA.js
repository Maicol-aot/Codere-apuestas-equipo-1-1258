import React  from "react";
import EventoActivo from "./EventoActivo";

const ListaEventosA =(props) =>{

    const Eventos =props.Eventos;
    const ListaActivos = Eventos.map ( p =>
        <EventoActivo 
            nombreEventos = {p.nombreEvento}
            id = {p.id}
            fechaI = {p.fechaI}
            horaI={p.horaI}
        
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
                                                <th scope="col">#</th>
                                                <th scope="col">Nombre del Evento</th>
                                                <th scope="col">ID del Evento</th>
                                                <th scope="col">Fecha de Inicio</th>
                                                <th scope="col">Accion</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {ListaActivos}
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