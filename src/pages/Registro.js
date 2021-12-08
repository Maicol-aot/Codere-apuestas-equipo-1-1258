import React from 'react';

import RegistroNavBar from '../components/RegistroNavBar';

const Registro = () => {

    const validPassword = ()=>{
        let password = document.getElementById('password').value;
        console.log(password);
        if (password.length < 8) return alert('se necesitan minimo 8 caracteres'); 
    };
    const confirmationPassword = ()=>{
        let password = document.getElementById('password').value;
        let conPassword = document.getElementById('passwordConfirmation').value;
        console.log(conPassword);
        if (conPassword !== password) return alert('Las contraseñas no son iguales'); 
    };
    return (
        
        <>
            <link href="/assets/css/styleMaicol.css" rel="stylesheet"/>
            <link href="/assets/css/Registro.css" rel="stylesheet"/>
            <RegistroNavBar />
            <div id="box-bod">
                <div className="container-fluid">
                    <h4 id="container-title">Registrarse</h4>
                    <form className="registerForm">
                        <div className="rows">
                            <h6 className="form-subtitles">Datos personales</h6>
                            <input className="form-control" id="form-control" type="text" placeholder="Nombre" name="nombre" required="true" />
                            <input className="form-control" id="form-control" type="text" placeholder="Primer apellido" name="primerApellido" required="true"/>
                            <input className="form-control" id="form-control" type="text" placeholder="Segundo apellido" name="segundoApellido" required="true"/>
                            <div className="cont">
                                <h6 id="form-subtitles">Fecha nacimiento</h6>
                                <input type="date" class="form-date" id="fechaNacimiento" required="true"/>
                            </div>
                        
                        </div>
                        <div className="rows">
                            <h6 className="form-subtitles">Datos identificacion</h6>
                            <select className="form-select" id="select-residencia" formcontrolname="documentoID" aria-label="Default select example" required="true">
                                <option selected value="Cedula de ciudadania">Cedula de ciudadania</option>
                                <option value="Cedula de extranjeria">Cedula de extranjeria</option>
                            </select> 
                            <input className="form-control" id="form-control" type="text" placeholder="Numero de documento" name="numeroDocumento" required="true"/>
                            <input className="form-control" id="form-control" type="text" placeholder="Lugar de expedicion" name="sitioExpedicion" required="true"/>
                            <div className="cont">
                                <h6 id="form-subtitles">Fecha expedicion</h6>
                                <input type="date" class="form-date" required="true"/>
                            </div>
                        
                        </div>
                        <div className="rows">
                            <h6 className="form-subtitles-single">Datos de contacto</h6>
                            <select className="form-select" id="select-residencia" formcontrolname="diaNacimiento" aria-label="Default select example" required="true">
                                <option selected>Departamento de residencia</option>
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
                            <input type="text" className="form-control" id="select-residencia" formcontrolname="diaNacimiento" required="true" placeholder="Muncipio de residencia"/> 
                            <input className="form-control" id="form-control" type="text" placeholder="Direccion de residencia" name="direccion" required="true"/>
                            <input className="form-control" id="form-control" type="email" placeholder="Correo electronico" name="email" required="true"/>
                            <input className="form-control" id="movil" type="text" placeholder="Movil" name="nombre" /> 
                        </div>
                        <div className="rows">
                            <h6 className="form-subtitles-single">Datos usuario</h6>
                            <input className="form-control" id="form-control" type="text" placeholder="Usuario" name="usrname" required="true"/>
                            <input className="form-control" id="password" type="password" placeholder="Contraseña" name="password" required="true" onBlur={validPassword}/>
                            <input className="form-control" id="passwordConfirmation" type="password" placeholder="Confirmar contraseña"  name="validatePass" required="true" onBlur={confirmationPassword}/>
                            
                        </div>
                        <div className="termRow">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" required="true"/>
                            <p className="terminosCondiciones"> 
                            Confirmo que tengo más de 18 años que no padezco ninguna enfermedad mental que haya sido declarada interdicta judicialmentey que he leido, entendido y acepto los términos y condiciones 
                            </p>

                        </div>
                        <button class="btn btn btn-success" type="submit" href="#r">Continuar</button>
                    </form>
                    
                </div>
            </div>
        </>
        
    );
};

export default Registro;