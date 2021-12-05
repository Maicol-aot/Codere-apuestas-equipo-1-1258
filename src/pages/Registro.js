import React from 'react';

import Footer from '../components/Footer';
import RegistroNavBar from '../components/RegistroNavBar';

const Registro = () => {
    return (
        <>
            <link href="/assets/css/Registro.css" rel="stylesheet"/>
            <RegistroNavBar />
            <div id="box-bod">
                <div className="container-fluid">
                    <h4 id="container-title">Registrarse</h4>
                    <form className="registerForm">
                        <div className="rows">
                            <h6 className="form-subtitles">Datos personales</h6>
                            <input className="form-control" id="form-control" type="text" placeholder="Nombre" name="nombre" />
                            <input className="form-control" id="form-control" type="text" placeholder="Primer apellido" name="primerApellido" />
                            <input className="form-control" id="form-control" type="text" placeholder="Segundo apellido" name="segundoApellido" />
                            <div className="cont">
                                <h6 id="form-subtitles">Fecha nacimiento</h6>
                                <select className="form-select" id="select-fechas" formcontrolname="diaNacimiento" aria-label="Default select example">
                                    <option selected>Dia</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <select className="form-select" id="select-fechas" formcontrolname="diaNacimiento" aria-label="Default select example">
                                    <option selected>Mes</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">30</option>
                                </select>
                                <select className="form-select" id="select-fechas" formcontrolname="diaNacimiento" aria-label="Default select example">
                                    <option selected>Anio</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>   
                            </div>
                        
                        </div>
                        <div className="rows">
                            <h6 className="form-subtitles">Datos identificacion</h6>
                            <select className="form-select" id="select-residencia" formcontrolname="documentoID" aria-label="Default select example">
                                <option selected value="Cedula de ciudadania">Cedula de ciudadania</option>
                                <option value="Cedula de extranjeria">Cedula de extranjeria</option>
                            </select> 
                            <input className="form-control" id="form-control" type="text" placeholder="Numero de documento" name="numeroDocumento" />
                            <input className="form-control" id="form-control" type="text" placeholder="Lugar de expedicion" name="sitioExpedicion" />
                            <div className="cont">
                                <h6 id="form-subtitles">Fecha expedicion</h6>
                                <select className="form-select" id="select-fechas" formcontrolname="diaNacimiento" aria-label="Default select example">
                                    <option selected>Dia</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <select className="form-select" id="select-fechas" formcontrolname="diaNacimiento" aria-label="Default select example">
                                    <option selected>Mes</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">30</option>
                                </select>
                                <select className="form-select" id="select-fechas" formcontrolname="diaNacimiento" aria-label="Default select example">
                                    <option selected>Año</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>   
                            </div>
                        
                        </div>
                        <div className="rows">
                            <h6 className="form-subtitles-single">Datos de contacto</h6>
                            <select className="form-select" id="select-residencia" formcontrolname="diaNacimiento" aria-label="Default select example">
                                <option selected>Departamento de residencia</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select> 
                            <select className="form-select" id="select-residencia" formcontrolname="diaNacimiento" aria-label="Default select example">
                                <option selected>Municipio de residencia</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select> 
                            <input className="form-control" id="form-control" type="text" placeholder="Direccion de residencia" name="direccion" />
                            <input className="form-control" id="form-control" type="email" placeholder="Correo electronico" name="email" />
                            <input className="form-control" id="movil" type="text" placeholder="Movil" name="nombre" /> 
                        </div>
                        <div className="rows">
                            <h6 className="form-subtitles-single">Datos usuario</h6>
                            <input className="form-control" id="form-control" type="text" placeholder="Usuario" name="usrname" />
                            <input className="form-control" id="form-control" type="password" placeholder="Contraseña" name="password" />
                            <input className="form-control" id="form-control" type="password" placeholder="Confirmar contraseña" name="validatePass" />
                            
                        </div>
                        <div className="termRow">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                            <p className="terminosCondiciones"> 
                            Confirmo que tengo más de 18 años que no padezco ninguna enfermedad mental que haya sido declarada interdicta judicialmentey que he leido, entendido y acepto los términos y condiciones 
                            </p>

                        </div>
                        <button class="btn btn btn-success" type="submit">Continuar</button>
                    </form>
                    
                </div>
            </div>
        </>
        
    );
};

export default Registro;