import React from 'react';
import DatosPerfil from './DatosPerfil';

const InfoUsuario = (props) =>{
    const Datos = props.Datos;
    const ListaDatos = Datos.map( p =>
        <DatosPerfil 
            nombre = {p.nombre}
            primerApellido ={p.primerApellido}
            _id = {p._id}
            usrname = {p.usrname}
            rol={p.rol}
            email ={p.email}
            municipio = {p.municipio}
            movil = {p.movil}
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

export default InfoUsuario;