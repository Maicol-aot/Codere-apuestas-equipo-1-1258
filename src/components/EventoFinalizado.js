import React from "react";

const EventoActivo = (props) =>{
    return(
        <>
            <tr>
                <th scope="row">1</th>
                <td>{props.nombreEventos}</td>
                <td><td><a href="#" className="btn btn-primary">Ver Detalles</a></td></td>
                <td>{props.id}</td>
                <td>{props.fechaF} - {props.horaF}</td>
            </tr>
        </>
    );
};

export default EventoActivo;