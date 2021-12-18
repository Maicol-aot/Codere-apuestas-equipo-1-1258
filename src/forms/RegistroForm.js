import { useState, useEffect } from "react";
import React from 'react';


const RegistroForm = () => {
    

    const validPassword = ()=>{
        let password = document.getElementById('password').value;
        console.log(password);
        if (password.length < 8) return alert('Tu contraseña debe tener minimo 8 caracteres '); 
    };

    const confirmationPassword = ()=>{
        let password = document.getElementById('password').value;
        let conPassword = document.getElementById('passwordConfirmation').value;
        console.log(conPassword);
        if (conPassword !== password) return alert('Las contraseñas no son iguales'); 
    };


    const validarNombre = () =>{
            let infoNombre = document.getElementById('nombre').value;
            let fomrato_texto = /([a-zA-Z]{3,30}\s*)+/;
            if (!infoNombre.match(fomrato_texto)) {
                return alert('Por favor ingresa un dato valido en la casilla "Nombre" '); //cambiar el alert por una validacion de errores general porque envia los datoss
            }
        };

    

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


    const validarApellido1 = () =>{
        let infoApellido1 = document.getElementById('apellido1').value;
        let fomrato_texto = /([a-zA-Z]{3,30}\s*)+/;
        if (!infoApellido1.match(fomrato_texto)) {
            return alert('Por favor ingresa un dato valido en la casilla "Primer Apellido" ');

        }
    };
    
    const validarApellido2 = () =>{
        let infoApellido2 = document.getElementById('apellido2').value;
        let fomrato_texto = /([a-zA-Z]{3,30}\s*)+/;
        if (!infoApellido2.match(fomrato_texto)) {
            return alert('Por favor ingresa un dato valido en la casilla "Segundo Apellido" ');

        }
    };

    const validarNdoc = () =>{
        let ndoc = document.getElementById('ndoc').value;
        let formato_numero = /^([0-9])*$/;
        if (!ndoc.match(formato_numero)){
            return alert('Solo puedes ingresar numeros en el campo "No. de documento"'); //cambiar el alert por una validacion de errores general porque envia los datoss
        }
    };

    const validarLugarExp = () =>{
        let lugarExp = document.getElementById('lugarExp').value;
        let fomrato_texto = /^[a-z ,.'-]+$/i;
        
        
        if (!lugarExp.match(fomrato_texto)) {
            return alert('Por favor ingresa un dato valido en la casilla "Lugar de expedicón" ');

        }
    };

    const validarCiudad = () =>{
        let ciudad = document.getElementById('ciudad').value;
        let fomrato_texto = /^[a-z ,.'-]+$/i;
        
        
        if (!ciudad.match(fomrato_texto)) {
            return alert('Por favor ingresa un dato valido en la casilla "Ciudad" ');

        }
    };

    const validarTel = () =>{
        let nTel = document.getElementById('tel').value;
        let formato_numero = /^([0-9]{0,10})*$/;
        if (!nTel.match(formato_numero)){
            return alert('ingresa un numero de telefono valido en el campo "Teléfono"'); //cambiar el alert por una validacion de errores general porque envia los datoss
        }
    };
   

    const [datos,setDatos] = useState({ //con llaves se crea un objeto
        nombre: "",
        primerApellido: "",
        segundoApellido: "",
        fechaNacimiento: "",
        tipoDoc: "",
        nDoc: "",
        lugarExpedicion: "",
        fechaExpedicio: "",
        departamento: "",
        municipio: "",
        direccion: "",
        email: "",
        movil: "",
        password: "",
        rol: "user",
        saldo: "0.00",
        usrname: ""
    })

    

    const handleInputChange = (event) =>{
         // console.log(event.target.value) permite ir copiando cada caracter inngresdo en el input
        setDatos({
            ...datos, //aqui se crea una pseudo copia d ecada valor para que no se borre el anterior
            [event.target.name] : event.target.value // se relaciona lo que hay en el input con su name y el valor de la estructura en estado
        })
    }

    const enviarDatosUsers = (event) =>{
        event.preventDefault();
        console.log(datos)
    }
        

    
    return(
        <>
            <div id="box-bod">
                <div className="container-fluid">
                    <h4 id="container-title">Registrarse</h4>
                    <form className="registerForm" onSubmit={enviarDatosUsers}>
                        <div className="rows">
                            <h6 className="form-subtitles">Datos personales</h6>
                            <input className="form-control" id="nombre" type="text" placeholder="Nombre" name="nombre" required="true" onChange={handleInputChange}/>
                            {/* onBlur={validarNombre} */}
                            <input className="form-control" id="apellido1"  type="text" placeholder="Primer apellido" name="primerApellido" required="true" onChange={handleInputChange}/>
                            {/* onBlur={validarApellido1} */}
                            <input className="form-control" id="apellido2" type="text" placeholder="Segundo apellido" name="segundoApellido" required="true"  onChange={handleInputChange}/>
                            {/* onBlur={validarApellido2} */}
                            <div className="cont">
                                <h6 id="form-subtitles">Fecha nacimiento</h6>
                                <input type="date" className="form-date" id="nacimiento" required="true"  onChange={handleInputChange}/>
                                {/* onBlur={validarEdad} */}
                            </div>
                        
                        </div>
                        <div className="rows">
                            <h6 className="form-subtitles">Datos identificacion</h6>
                            <select className="form-select" id="select-residencia" formcontrolname="documentoID" aria-label="Default select example" required="true" name="tipoDoc" onChange={handleInputChange}>
                                <option selected value="Cedula de ciudadania">Cedula de ciudadania</option>
                                <option value="Cedula de extranjeria">Cedula de extranjeria</option>
                            </select> 
                            <input className="form-control" id="ndoc" type="text" placeholder="Numero de documento" required="true" name="nDoc" onChange={handleInputChange}/>
                            {/* onBlur={validarNdoc} */}
                            <input className="form-control" id="lugarExp" type="text" placeholder="Lugar de expedicion"  required="true"  name ="lugarExpedicion" onChange={handleInputChange}/>
                            {/* onBlur={validarLugarExp} */}
                            <div className="cont">
                                <h6 id="form-subtitles">Fecha expedicion</h6>
                                <input type="date" class="form-date" required="true" name ="fechaExpedicio" />
                            </div>
                        
                        </div>
                        <div className="rows">
                            <h6 className="form-subtitles-single">Datos de contacto</h6>
                            <select className="form-select" id="select-residencia" formcontrolname="diaNacimiento" aria-label="Default select example" required="true" name="departamento" onChange={handleInputChange}>
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
                            <input type="text" className="form-control" id="ciudad" formcontrolname="diaNacimiento" required="true" placeholder="Muncipio de residencia" name="municipio" onChange={handleInputChange}/> 
                            {/* onBlur={validarCiudad} */}
                            <input className="form-control" id="form-control" type="text" placeholder="Direccion de residencia" name="direccion" required="true" onChange={handleInputChange}/>
                            <input className="form-control" id="email2" type="email" placeholder="Correo electronico" name="email" required="true"  onChange={handleInputChange} />
                            {/* onBlur={validarEmail} */}
                            <input className="form-control" id="tel" type="text" placeholder="Movil" name="movil" onChange={handleInputChange}/>
                             {/* onBlur={validarTel}  */}
                        </div>
                        <div className="rows">
                            <h6 className="form-subtitles-single">Datos usuario</h6>
                            <input className="form-control" id="form-control" type="text" placeholder="Usuario" name="usrname" required="true" onChange={handleInputChange}/>
                            <input className="form-control" id="password" type="password" placeholder="Contraseña" name="password" required="true" onBlur={validPassword} onChange={handleInputChange}/>
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

export default RegistroForm;