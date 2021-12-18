import React from "react";

const Usuario = (props) =>{
    return(
        <>
            <tr>
                <th scope="row">{props.id_usuario}</th>
                <td>{props.usrname}</td>
                <td>{props.nombre}  {props.primerApellido}</td>
                <td>{props.rol}</td>
                <td><td><a href="#" className="btn btn-danger">Eliminar</a></td></td>
            </tr>
        </>
    );
};

export default Usuario;