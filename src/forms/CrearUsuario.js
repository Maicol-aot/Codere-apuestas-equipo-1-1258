import react from 'react';

const CrearUsuario = () =>{

        const validarEmail = () =>{
            let infoEmail = document.getElementById('email2').value;
            let formato_email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

            if (!infoEmail.match(formato_email)) {
                return alert('Por favor escriba un correo electronico válido.');
            }
        };
         
        const validarEdad = () =>{
            let infoEdad = document.getElementById('nacimiento').value;
            let limiteEdad = 2003-12-15;
            console.log(infoEdad);
            if (parseInt(infoEdad) > limiteEdad) {
                return alert('Tienes que ser mayor de 18 años para  registrarte'); //cambiar el alert por una validacion de errores general porque envia los datoss
            }
        };

    return(
        <>
            
            <form> {/*  id mixtos, verificar validacions */}
                <div className="row">
                </div>
                <div className="row">

                    <div className="col-sm-3 mb-3">
                        <label >Datos personales </label>
                        <input type="text" className="form-control" id="validationDefault01" placeholder="Nombre" required={true} />
                    </div>
                    <div className="col-sm-3 mb-3">
                        <label></label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="Primer apellido" required={true} />
                    </div>
                    <div className="col-sm-3 mb-3">
                        <label></label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="Segundo apellido" required={true} />
                    </div>

                    <div className="col-sm-3 mb-3">
                        <label>Fecha de nacimiento</label>
                        <input type="date" className="form-control" id="nacimiento" placeholder="Fecha de nacimiento"  required={true} onBlur={validarEdad}/>
                    </div>


                </div>
                <div className="row">
                    <div className="col-sm-3 mb-3">
                        <label >Datos de identificacíon</label>
                        <select className="custom-select mr-sm-2 form-control " id="inlineFormCustomSelect">
                            <option selected>Tipo de documento</option>
                            <option value="1">Cédula de ciudadania</option>
                            <option value="2">Cédula de extranjería</option>
                            
                        </select>

                    </div>
                    <div className="col-sm-3 mb-3">
                        <label></label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="No. de documento" required={true} />
                    </div>
                    <div className="col-sm-3 mb-3">
                        <label></label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="Lugar de expedicíon" required={true} />
                    </div>

                    <div className="col-sm-3 mb-3">
                        <label>Fecha de Expedicion</label>
                        <input type="date" className="form-control" id="validationDefault02" placeholder="Fecha de Expedicion" required={true} />
                    </div>


                </div>
                <div className="row">
                    <label>Datos de contacto</label>
                    <div className="col-sm-3 mb-3">

                        <input type="text" className="form-control" id="email2" placeholder="Correo electronico" required={true} onBlur={validarEmail}/>
                    </div>
                    <div className="col-sm-3 mb-3">
                    <select className="form-select" id="select-residencia" formcontrolname="diaNacimiento" aria-label="Default select example" required={true}>
                                <option selected>Departamento</option>
                                <option value="1">Amazonas</option>
                                <option value="2">Antioquia</option>
                                <option value="3">Arauca</option>
                                <option value="4">Atlántico</option>
                                <option value="5">Bogotá</option>
                                <option value="6">Bolívar</option>
                                <option value="7">Boyacá</option>
                                <option value="8">Caldas</option>
                                <option value="9">Caquetá</option>
                                <option value="10">Casanare</option>
                                <option value="11">Cauca</option>
                                <option value="12">Cesar</option>
                                <option value="13">Chocó</option>
                                <option value="14">Córdoba</option>
                                <option value="15">Cundinamarca</option>
                                <option value="16">Guainía</option>
                                <option value="17">Guaviare</option>
                                <option value="18">Huila</option>
                                <option value="19">La Guajira</option>
                                <option value="20">Magdalena</option>
                                <option value="21">Meta</option>
                                <option value="22">Nariño</option>
                                <option value="23">Norte de Santander</option>
                                <option value="24">Putumayo</option>
                                <option value="25">Quindío</option>
                                <option value="26">Risaralda</option>
                                <option value="27">San Andrés y Providencia</option>
                                <option value="28">Santander</option>
                                <option value="29">Sucre</option>
                                <option value="30">Tolima</option>
                                <option value="31">Valle del Cauca</option>
                                <option value="32">Vaupés</option>
                                <option value="33">Vichada</option>
                            
                            </select> 
                    </div>

                    <div className="col-sm-3 mb-3">

                        <input type="text" className="form-control" id="validationDefault02" placeholder="Ciudad" required={true} />
                        
                    </div>

                    <div className="col-sm-3 mb-3">

                    <input className="form-control" id="form-control" type="text" placeholder="Direccion de residencia" name="direccion" required={true}/>
                        
                    </div>
                    

                    <div className="col-sm-3 mb-3">

                        <input type="text" className="form-control" id="validationDefault02" placeholder="Teléfono" required={true} />
                    </div>





                </div>
                <div className="row">
                    <label>Datos de usuario</label>
                    <div className="col-sm-3 mb-3">

                        <input type="text" className="form-control" id="validationDefault01" placeholder="Nombre de usuario" required={true} />
                    </div>
                    <div className="col-sm-3 mb-3">

                        <input type="text" className="form-control" id="validationDefault02" placeholder="contraseña" required={true} />
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