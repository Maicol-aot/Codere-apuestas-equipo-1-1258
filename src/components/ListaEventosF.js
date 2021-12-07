import React  from "react";
import Paginator from "./Paginator";
import SearchBar from "./SearchBar";
import EventoFinalizado from "./EventoFinalizado"



const ListaEventosF =(props) =>{

    const Eventos =props.Eventos;
    const ListaFinalizados = Eventos.map ( p =>
        <EventoFinalizado 
            nombreEventos = {p.nombreEvento}
            id = {p.id}
            fechaF = {p.fechaF}
            horaF={p.horaF}
        
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
                                                <th scope="col">Detalles</th>
                                                <th scope="col">ID del Evento</th>
                                                <th scope="col">Fecha de Finalizacíon</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                             {ListaFinalizados}
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