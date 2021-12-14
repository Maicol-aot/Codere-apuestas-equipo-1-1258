import React from 'react';
import DatosPerfil from './DatosPerfil';

const InfoAdmin = (props) =>{
    const Datos = props.Datos;
    const ListaDatos = Datos.map( p =>
        <DatosPerfil 
            nombre = {p.nombre}
            primerApellido ={p.primerApellido}
            id = {p.id}
            username = {p.username}
            tipouser={p.tipouser}
            email ={p.email}
            pais = {p.pais}
            telefono = {p.telefono}
        />);
    return(
        <>
            <div className="tab-pane fade show active profile-overview" id="profile-overview">

                <h5 className="card-title">Detalles</h5>
                {ListaDatos}

                

            </div>
            
        </>
    );
};

export default InfoAdmin;