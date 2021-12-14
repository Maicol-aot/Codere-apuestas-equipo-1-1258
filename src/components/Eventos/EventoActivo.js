import React from "react";

const EventoActivo = (props) =>{
    return(
        <>
            <tr>
                <th scope="row">1</th>
                <td>{props.nombreEventos}</td>
                <td>{props.id}</td>
                <td>{props.fechaI} - {props.horaI}</td>
                <td><td><a href="#" className="btn btn-danger">Cerrar</a></td></td>
            </tr>
        </>
    );
};

export default EventoActivo;