import react from 'react';

const CrearUsuario = () =>{

    return(
        <>
            
            <form> {/*  id mixtos, verificar validacions */}
                <div className="row">
                </div>
                <div className="row">

                    <div className="col-sm-3 mb-3">
                        <label >Datos personales </label>
                        <input type="text" className="form-control" id="validationDefault01" placeholder="Nombre" required />
                    </div>
                    <div className="col-sm-3 mb-3">
                        <label></label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="Primer apellido" required />
                    </div>
                    <div className="col-sm-3 mb-3">
                        <label></label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="Segundo apellido" required />
                    </div>

                    <div className="col-sm-3 mb-3">
                        <label>Fecha de nacimiento</label>
                        <input type="date" className="form-control" id="validationDefault02" placeholder="Fecha de nacimiento" required />
                    </div>


                </div>
                <div className="row">
                    <div className="col-sm-3 mb-3">
                        <label >Datos de identificacíon</label>
                        <select className="custom-select mr-sm-2 form-control " id="inlineFormCustomSelect">
                            <option selected>Tipo de documento</option>
                            <option value="1">Cédula de ciudadania</option>
                            <option value="2">Cédula de extranjería</option>
                            <option value="3">Pasaporte</option>
                        </select>

                    </div>
                    <div className="col-sm-3 mb-3">
                        <label></label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="No. de documento" required />
                    </div>
                    <div className="col-sm-3 mb-3">
                        <label></label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="Lugar de expedicíon" required />
                    </div>

                    <div className="col-sm-3 mb-3">
                        <label>Fecha de Expedicion</label>
                        <input type="date" className="form-control" id="validationDefault02" placeholder="Fecha de Expedicion" required />
                    </div>


                </div>
                <div className="row">
                    <label>Datos de contacto</label>
                    <div className="col-sm-3 mb-3">

                        <input type="text" className="form-control" id="validationDefault01" placeholder="Correo electronico" required />
                    </div>
                    <div className="col-sm-3 mb-3">

                        <input type="text" className="form-control" id="validationDefault02" placeholder="Pais de residencia" required />
                    </div>
                    <div className="col-sm-3 mb-3">

                        <input type="text" className="form-control" id="validationDefault02" placeholder="Teléfono" required />
                    </div>




                </div>
                <div className="row">
                    <label>Datos de usuario</label>
                    <div className="col-sm-3 mb-3">

                        <input type="text" className="form-control" id="validationDefault01" placeholder="Nombre de usuario" required />
                    </div>
                    <div className="col-sm-3 mb-3">

                        <input type="text" className="form-control" id="validationDefault02" placeholder="contraseña" required />
                    </div>
                    <div className="col-sm-3 mb-3">


                        <select className="custom-select mr-sm-2 form-control " id="inlineFormCustomSelect">
                            <option selected>Tipo de usuario</option>
                            <option value="1">Administrador</option>
                            <option value="2">Interno</option>
                            <option value="3">Usuario</option>
                        </select>


                    </div>




                </div>
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </>


    );
};

export default CrearUsuario;