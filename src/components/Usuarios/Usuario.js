import React from "react";

const Usuario = (props) =>{
    return(
        <>
            <tr>
                
                <td>{props.username}</td>
                <td>{props.nombre}  {props.primerApellido}</td>
                <td>{props.tipouser}</td>
                <td><td><a href="#" className="btn btn-danger">Eliminar</a></td></td>
            </tr>
        </>
    );
};

export default Usuario;