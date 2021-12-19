import react, { useState } from 'react';
import { useForm } from 'react-hook-form';


const CrearUsuario = () =>{
        // validaciones minimas
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

        const validarNombre = () =>{
            let infoNombre = document.getElementById('nombre').value;
            let fomrato_texto = /([a-zA-Z]{3,30}\s*)+/;
            if (!infoNombre.match(fomrato_texto)) {
                return alert('Por favor ingresa un dato valido en la casilla "Nombre" '); //cambiar el alert por una validacion de errores general porque envia los datoss
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
        //validaciones minimas

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
            rol: "",
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
    
        const enviarDatosUsers = async (event) =>{
            event.preventDefault();
            console.log(datos)

            try {
            
                const newData = await fetch('http://localhost:9000/registro',{
                    method :'POST',
                    headers: {
                        'Accept': 'application/json',
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(datos)})
                    console.log(datos);
    
    
                
            } catch (error) {
                console.log("hubo un error al enviar los datos")
                console.log(error);
                
            }
        }

    return(
        <>
            
            <form onSubmit={enviarDatosUsers}> {/*  id mixtos, verificar validacions */}
                <div className="row">
                </div>
                <div className="row">

                    <div className="col-sm-3 mb-3">
                        <label >Datos personales </label>
                        <input type="text" className="form-control" 
                            id="nombre" placeholder="Nombre" 
                            name = "nombre"
                            required={true} 
                            onChange={handleInputChange}
                        />

                        {/* onBlur={validarNombre} */}
                    </div>
                    <div className="col-sm-3 mb-3">
                        <label></label>
                        <input type="text" className="form-control" 
                            id="apellido1" placeholder="Primer apellido" 
                            name="primerApellido" 
                            required={true} 
                            onChange={handleInputChange}
                
                        />
                        {/* onBlur={validarApellido1} */}
                    </div>
                    <div className="col-sm-3 mb-3">
                        <label></label>
                        <input type="text" className="form-control" 
                            id="apellido2" placeholder="Segundo apellido" 
                            name ="segundoApellido" 
                            required={true} 
                            onChange={handleInputChange}  
                        />  
                        {/* onBlur={validarApellido2} */}
                    </div>

                    <div className="col-sm-3 mb-3">
                        <label>Fecha de nacimiento</label>
                        <input type="date" className="form-control"
                            id="nacimiento" placeholder="Fecha de nacimiento" 
                            name="fechaNacimiento" 
                            required={true} 
                            onChange={handleInputChange}
    
                        /> 
                        {/* onBlur={validarEdad} */}
                    </div>


                </div>
                <div className="row">
                    <div className="col-sm-3 mb-3">
                        <label >Datos de identificacíon</label>
                        <select className="custom-select mr-sm-2 form-control " 
                            id="inlineFormCustomSelect" 
                            name = "tipoDoc" 
                            onChange={handleInputChange}
                        >
                            <option selected>Tipo de documento</option>
                            <option value="cedula de ciudadania">Cédula de ciudadania</option>
                            <option value="cedula de extranjeria">Cédula de extranjería</option>
                            
                        </select>

                    </div>
                    <div className="col-sm-3 mb-3">
                        <label></label>
                        <input type="text" className="form-control" 
                            id="ndoc" placeholder="No. de documento" 
                            name="nDoc" required={true} 
                            onChange={handleInputChange}
                        
                        /> 
                        {/* onBlur={validarNdoc} */}
                    </div>
                    <div className="col-sm-3 mb-3">
                        <label></label>
                        <input type="text" className="form-control" 
                            id="lugarExp" placeholder="Lugar de expedicíon" 
                            name ="lugarExpedicion"  
                            required={true} 
                            onChange={handleInputChange}
                            
                        />
                         {/* onBlur={validarLugarExp} */}
                    </div>

                    <div className="col-sm-3 mb-3">
                        <label>Fecha de Expedicion</label>
                        <input type="date" className="form-control"
                            id="validationDefault02" placeholder="Fecha de Expedicion" 
                            name="fechaExpedicion" 
                            required={true} 
                            onChange={handleInputChange} 
                        />
                    </div>


                </div>
                <div className="row">
                    <label>Datos de contacto</label>
                    <div className="col-sm-3 mb-3">
                        <input type="text" className="form-control" 
                            id="email2" placeholder="Correo electronico" 
                            name="email" 
                            required={true} 
                            onChange={handleInputChange} 
                        />
                         {/* onBlur={validarEmail} */}
                    </div>

                    <div className="col-sm-3 mb-3">
                    <select className="form-select" id="select-residencia" 
                        formcontrolname="diaNacimiento" aria-label="Default select example" 
                        name ="departamento"
                        required={true} 
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
                                <option value="La Guahira">La Guajira</option>
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
                    </div>

                    <div className="col-sm-3 mb-3">

                        <input type="text" className="form-control" 
                            id="ciudad" placeholder="Ciudad" 
                            name="municipio" 
                            required={true}  
                            onChange={handleInputChange} /> 
                        {/* onBlur={validarCiudad} */}
                        
                    </div>

                    <div className="col-sm-3 mb-3">

                    <input className="form-control" id="form-control" 
                        type="text" placeholder="Direccion" 
                        name="direccion" 
                        required={true} 
                        onChange={handleInputChange}/>
                        
                    </div>
                    

                    <div className="col-sm-3 mb-3">

                        <input type="text" className="form-control" 
                            id="tel" placeholder="Teléfono" 
                            name ="movil" 
                            required={true} 
                            onChange={handleInputChange}/>
                         {/* onBlur={validarTel} */}
                    </div>





                </div>
                <div className="row">
                    <label>Datos de usuario</label>
                    <div className="col-sm-3 mb-3">
                        <input type="text" className="form-control"
                            id="validationDefault01" placeholder="Nombre de usuario" 
                            name="usrname" 
                            required={true} 
                            onChange={handleInputChange} />
                    </div>
                    <div className="col-sm-3 mb-3">

                        <input type="password" className="form-control" 
                            id="validationDefault02" placeholder="contraseña" 
                            name="password" 
                            required={true}  
                            onChange={handleInputChange}/>
                    </div>
                    <div className="col-sm-3 mb-3">


                        <select className="custom-select mr-sm-2 form-control " 
                            id="inlineFormCustomSelect" 
                            name ="rol" 
                            onChange={handleInputChange}>
                            <option selected>Tipo de usuario</option>
                            <option value="admin">administrador</option>
                            <option value="intern">interno</option>
                            <option value="user">usuario</option>
                            
                        </select>


                    </div>




                </div>
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </>


    );
};

export default CrearUsuario;