

const DatosPerfil = (props) =>{
    return(
        <>
           <div className="row">
                    <div className="col-lg-3 col-md-4 label ">Nombre completo</div>
                    <div className="col-lg-9 col-md-8">{props.nombre} {props.primerApellido}</div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-4 label">Usuario</div>
                    <div className="col-lg-9 col-md-8">{props.username}</div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-4 label">Codigo de empleado</div>
                    <div className="col-lg-9 col-md-8">{props.id}</div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-4 label">Tipo de usuario</div>
                    <div className="col-lg-9 col-md-8">{props.tipouser}</div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-4 label">Pais de residencia</div>
                    <div className="col-lg-9 col-md-8">{props.pais}</div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-4 label">Telefono</div>
                    <div className="col-lg-9 col-md-8">{props.telefono}</div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-4 label">Email</div>
                    <div className="col-lg-9 col-md-8">{props.email}</div>
                </div>

        </>
    );
};

export default DatosPerfil;