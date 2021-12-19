import { useState, useEffect } from "react";
import React from 'react';
import { useForm } from "react-hook-form";



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

    

   

    const [datos,setDatos] = useState({ //con llaves se crea un objeto
        nombre: "",
        primerApellido: "",
        segundoApellido: "",
        fechaNacimiento: "",
        tipoDoc: "",
        nDoc: "",
        lugarExpedicion: "",
        fechaExpedicion: "",
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

    const [mensaje, setMensaje] = useState('')
    


    const handleInputChange = (event) =>{
         // console.log(event.target.value) permite ir copiando cada caracter inngresdo en el input
        setDatos({
            ...datos, //aqui se crea una pseudo copia d ecada valor para que no se borre el anterior
            [event.target.name] : event.target.value // se relaciona lo que hay en el input con su name y el valor de la estructura en estado
        })
    }
    
    const {handleSubmit} = useForm();
    const onSubmit = async (event,e) =>{
        console.log(datos);
        try {
            
            const newData = await fetch('http://localhost:9000/registro',{
                method :'POST',
                headers: {
                    'Accept': 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify(datos)})
                console.log(datos);
                setMensaje('Usuario registrado exitosamente. Ya puedes iniciar sesion.');
            
            
        } catch (error) {
            setMensaje('Llena los campos del formulario correctamente')
            console.log("hubo un error al enviar los datos")
            console.log(error);
            
        }
        e.target.reset();
    }
    

    return(
        <>
            
            <div id="box-bod">
                <div className="container-fluid">
                    <h4 id="container-title">Registrarse</h4>
                    <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
                        <div className="rows">
                            <h6 className="form-subtitles">Datos personales</h6>
                            <input className="form-control" id="nombre"
                                type="text" placeholder="Nombre" name="nombre" 
                                pattern="^[A-Za-z]{2,15}$"
                                title="Nombre no valido"
                                required="true" 
                                onChange={handleInputChange}
                                       
                            />

                            <input className="form-control" id="apellido1"  
                                type="text" placeholder="Primer apellido"
                                name="primerApellido" 
                                pattern="^[A-Za-z]{2,15}$"
                                title="Apellido no valido"
                                required="true" 
                                onChange={handleInputChange}
                            />
                           
                            <input className="form-control" id="apellido2"
                                type="text" placeholder="Segundo apellido"
                                name="segundoApellido" 
                                pattern="^[A-Za-z]{2,15}$"
                                title="Apellido no valido"
                                required="true"  
                                onChange={handleInputChange}
                            />
                            {/* onBlur={validarApellido2} */}

                            <div className="cont">
                                <h6 id="form-subtitles">Fecha nacimiento</h6>
                                <input type="date" className="form-date"
                                name="fechaNacimiento"
                                id="nacimiento"
                                required="true" 
                                // onBlur={validarEdad} 
                                onChange={handleInputChange}
                                

                                />
                                {/*  */}
                            </div>
                        
                        </div>
                        <div className="rows">
                            <h6 className="form-subtitles">Datos identificacion</h6>
                            <select className="form-select" id="select-residencia" 
                                formcontrolname="documentoID" aria-label="Default select example" 
                                required="true" 
                                name="tipoDoc" 
                                onChange={handleInputChange}

                            >
                                <option selected>Tipo de documento</option>
                                <option value="cedula de ciudadania">Cédula de ciudadania</option>
                                <option value="cedula de extranjeria">Cédula de extranjería</option>
                            </select> 
                            <input className="form-control" id="ndoc" 
                                type="text" placeholder="Numero de documento" 
                                pattern="^[0-9]{8,12}$" //numero de 0 a 9 que se repiten entre 8 12 caracteres
                                title="Cedula no valida"
                                name="nDoc" 
                                onChange={handleInputChange}
                            
                            />

                            <input className="form-control" id="lugarExp" 
                                type="text" placeholder="Lugar de expedicion"  
                                required="true"  
                                name ="lugarExpedicion" 
                                onChange={handleInputChange}/>

                            <div className="cont">
                                <h6 id="form-subtitles">Fecha expedicion</h6>
                                <input type="date" class="form-date" 
                                    required="true" 
                                    name ="fechaExpedicion" 
                                    onChange={handleInputChange}/>
                            </div>
                        
                        </div>
                        <div className="rows">
                            <h6 className="form-subtitles-single">Datos de contacto</h6>
                            <select className="form-select" id="select-residencia" 
                                formcontrolname="diaNacimiento" aria-label="Default select example" 
                                title=""
                                required="true" 
                                name="departamento" 
                                onChange={handleInputChange}
                            
                            >
                                <option selected>Departamento</option>
                                <option value="Amazonas">Amazonas</option>
                                <option value="Antioquia">Antioquia</option>
                                <option value="Arauca">Arauca</option>
                                <option value="Atlantico">Atlántico</option>
                                <option value="Bogota">Bogotá</option>
                                <option value="Bolivar">Bolívar</option>
                                <option value="Boyaca">Boyacá</option>
                                <option value="Caldas">Caldas</option>
                                <option value="Caqueta">Caquetá</option>
                                <option value="Casanare">Casanare</option>
                                <option value="Cauca">Cauca</option>
                                <option value="Cesar">Cesar</option>
                                <option value="Choco">Chocó</option>
                                <option value="Cordoba">Córdoba</option>
                                <option value="Cundinamarca">Cundinamarca</option>
                                <option value="Guainia">Guainía</option>
                                <option value="Guaviare">Guaviare</option>
                                <option value="Huila">Huila</option>
                                <option value="La Guajira">La Guajira</option>
                                <option value="Magdalena">Magdalena</option>
                                <option value="Meta">Meta</option>
                                <option value="Narinio">Nariño</option>
                                <option value="Norte de Santander">Norte de Santander</option>
                                <option value="Putumayo">Putumayo</option>
                                <option value="Quindio">Quindío</option>
                                <option value="Risaralda">Risaralda</option>
                                <option value="San Andres">San Andrés y Providencia</option>
                                <option value="Santander">Santander</option>
                                <option value="Sucre">Sucre</option>
                                <option value="Tolima">Tolima</option>
                                <option value="Valle del Cauca">Valle del Cauca</option>
                                <option value="Vaupes">Vaupés</option>
                                <option value="Vichada">Vichada</option>
                            
                            </select> 
                            <input type="text" className="form-control" 
                                id="ciudad" formcontrolname="diaNacimiento"
                                required="true" 
                                placeholder="Muncipio de residencia" 
                                title=""
                                name="municipio" 
                                onChange={handleInputChange}
                            /> 
                            {/* onBlur={validarCiudad} */}


                            <input className="form-control" id="form-control" 
                                type="text" placeholder="Direccion de residencia" 
                                name="direccion" 
                                pattern="^[#.0-9a-zA-Z\s,-]+$"
                                title="Direccion no valida"
                                required="true" 
                                onChange={handleInputChange}
                            
                            />
                            <input className="form-control" id="email2" 
                                type="email" placeholder="Correo electronico" 
                                name="email" 
                                title=""
                                required="true"  
                                onChange={handleInputChange} 
                            />
                            {/* onBlur={validarEmail} */}

                            <input className="form-control" id="tel"
                                type="text" placeholder="Movil" 
                                name="movil" 
                                pattern="^[0-9]{10,17}$"
                                title="Telefono no valido"
                                onChange={handleInputChange}
                                required="true"
                            
                            />
                             {/* onBlur={validarTel}  */}
                        </div>
                        <div className="rows">
                            <h6 className="form-subtitles-single">Datos usuario</h6>
                            <input className="form-control" id="form-control" 
                                type="text" placeholder="Usuario" 
                                name="usrname" 
                                title=""
                                required="true"
                                onChange={handleInputChange}
                                
                    
                            />

                            <input className="form-control" id="password" 
                                type="password" placeholder="Contraseña"
                                name="password" 
                                required="true" 
                                onBlur={validPassword} 
                                onChange={handleInputChange}
                            />
                            <input className="form-control" id="passwordConfirmation" 
                            type="password" placeholder="Confirmar contraseña"  
                            name="validatePass"
                            title="" 
                            required="true" 
                            onBlur={confirmationPassword}
                            />
                            
                        </div>
                        <div className="termRow">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" required="true"/>
                            <p className="terminosCondiciones"> 
                            Confirmo que tengo más de 18 años que no padezco ninguna enfermedad mental que haya sido declarada interdicta judicialmentey que he leido, entendido y acepto los términos y condiciones 
                            </p>

                        </div>
                        <button class="btn btn btn-success" type="submit" >Continuar</button>
                        <div className="row mt-2">
                            <div className="col-12 text-center">{mensaje}</div>
                        </div>  
                    </form>
                    
                </div>
            </div>
        </>
    );
};

export default RegistroForm;