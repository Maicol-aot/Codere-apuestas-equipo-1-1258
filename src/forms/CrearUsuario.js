import react, { useState } from 'react';
import { useForm } from 'react-hook-form';


const CrearUsuario = () =>{
        

        const [datos,setDatos] = useState({ 
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

        const [mensaje, setMensaje] = useState('')
    
        const handleInputChange = (event) =>{
            setDatos({
                ...datos, 
                [event.target.name] : event.target.value 
            })
        }
        const {handleSubmit} = useForm();
        const onSubmit = async (event,e) =>{
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
                    setMensaje('Usuario registrado exitosamente. El usuario ya puede iniciar sesion.');
    
    
                
            } catch (error) {
                setMensaje('Llena los campos del formulario correctamente')
                console.log("hubo un error al enviar los datos")
                console.log(error);
                
            }
            e.target.reset();
        }

    return(
        <>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                </div>
                <div className="row">

                    <div className="col-sm-3 mb-3">
                        <label >Datos personales </label>
                        <input type="text" className="form-control" 
                            id="nombre" placeholder="Nombre" 
                            name = "nombre"
                            pattern="^[A-Za-z]{2,15}$"
                            title="Nombre no valido"
                            required={true} 
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col-sm-3 mb-3">
                        <label></label>
                        <input type="text" className="form-control" 
                            id="apellido1" placeholder="Primer apellido" 
                            name="primerApellido"
                            pattern="^[A-Za-z]{2,15}$"
                            title="Apellido no valido" 
                            required={true} 
                            onChange={handleInputChange}
                
                        />
                    </div>

                    <div className="col-sm-3 mb-3">
                        <label></label>
                        <input type="text" className="form-control" 
                            id="apellido2" placeholder="Segundo apellido" 
                            name ="segundoApellido" 
                            pattern="^[A-Za-z]{2,15}$"
                            title="Apellido no valido"
                            required={true} 
                            onChange={handleInputChange}  
                        />  
                    </div>

                    <div className="col-sm-3 mb-3">
                        <label>Fecha de nacimiento</label>
                        <input type="date" className="form-control"
                            id="nacimiento" placeholder="Fecha de nacimiento" 
                            name="fechaNacimiento" 
                            required={true} 
                            onChange={handleInputChange}
    
                        /> 
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-3 mb-3">
                        <label >Datos de identificac??on</label>
                        <select className="custom-select mr-sm-2 form-control " 
                            id="inlineFormCustomSelect" 
                            name = "tipoDoc" 
                            onChange={handleInputChange}
                        >
                            <option selected>Tipo de documento</option>
                            <option value="cedula de ciudadania">C??dula de ciudadania</option>
                            <option value="cedula de extranjeria">C??dula de extranjer??a</option>
                            
                        </select>

                    </div>
                    <div className="col-sm-3 mb-3">
                        <label></label>
                        <input type="text" className="form-control" 
                            id="ndoc" placeholder="No. de documento" 
                            name="nDoc" 
                            pattern="^[0-9]{8,12}$" //numero de 0 a 9 que se repiten entre 8 12 caracteres
                            title="Cedula no valida"
                            required={true} 
                            onChange={handleInputChange}
                        
                        /> 
                    </div>
                    <div className="col-sm-3 mb-3">
                        <label></label>
                        <input type="text" className="form-control" 
                            id="lugarExp" placeholder="Lugar de expedic??on" 
                            name ="lugarExpedicion"  
                            required={true} 
                            onChange={handleInputChange}
                            
                        />
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
                                <option value="Atlantico">Atl??ntico</option>
                                <option value="Bogota">Bogot??</option>
                                <option value="Bolivar">Bol??var</option>
                                <option value="Boyaca">Boyac??</option>
                                <option value="Caldas">Caldas</option>
                                <option value="Caqueta">Caquet??</option>
                                <option value="Casanare">Casanare</option>
                                <option value="Cauca">Cauca</option>
                                <option value="Cesar">Cesar</option>
                                <option value="Choco">Choc??</option>
                                <option value="Cordoba">C??rdoba</option>
                                <option value="Cundinamarca">Cundinamarca</option>
                                <option value="Guainia">Guain??a</option>
                                <option value="Guaviare">Guaviare</option>
                                <option value="Huila">Huila</option>
                                <option value="La Guahira">La Guajira</option>
                                <option value="Magdalena">Magdalena</option>
                                <option value="Meta">Meta</option>
                                <option value="Narinio">Nari??o</option>
                                <option value="Norte de Santander">Norte de Santander</option>
                                <option value="Putumayo">Putumayo</option>
                                <option value="Quindio">Quind??o</option>
                                <option value="Risaralda">Risaralda</option>
                                <option value="San Andres">San Andr??s y Providencia</option>
                                <option value="Santander">Santander</option>
                                <option value="Sucre">Sucre</option>
                                <option value="Tolima">Tolima</option>
                                <option value="Valle del Cauca">Valle del Cauca</option>
                                <option value="Vaupes">Vaup??s</option>
                                <option value="Vichada">Vichada</option>
                            
                            </select> 
                    </div>

                    <div className="col-sm-3 mb-3">

                        <input type="text" className="form-control" 
                            id="ciudad" placeholder="Ciudad" 
                            name="municipio"      
                            required={true}  
                            onChange={handleInputChange} />            
                    </div>

                    <div className="col-sm-3 mb-3">

                    <input className="form-control" id="form-control" 
                        type="text" placeholder="Direccion" 
                        name="direccion" 
                        pattern="^[#.0-9a-zA-Z\s,-]+$"
                        title="Direccion no valida"
                        required={true} 
                        onChange={handleInputChange}/>
                        
                    </div>
                    

                    <div className="col-sm-3 mb-3">

                        <input type="text" className="form-control" 
                            id="tel" placeholder="Tel??fono" 
                            name ="movil" 
                            pattern="^[0-9]{10,17}$"
                            title="Telefono no valido"
                            required={true} 
                            onChange={handleInputChange}/>
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
                            id="validationDefault02" placeholder="contrase??a" 
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
                <div className="row mt-2">
                    <div className="col-12 text-center">{mensaje}</div>
                </div>
            </form>
        </>


    );
};

export default CrearUsuario;