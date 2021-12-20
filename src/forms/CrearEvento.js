import react from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';


const CrearEvento = () =>{

    const [datos,setDatos] = useState({ // dentro del estado con llaves se crea un objeto a los que se les asiganara un valor dependiendo del value del name del imput
        id_:"",
        nombreEvento: "",
        nombreLiga: "",
        dateInit: "",
        timeInit: "",
        limitDate: "",
        dateEnd: "",
        cuota1: "",
        cuota2: "",
        cuotaX: "",
        profit: "",
        nApostadores : "",
        resultado1 :"",
        resultado2 : "",
        estadoActivo: "true"

    })
    const {handleSubmit} = useForm();
    const handleInputChange = (event) =>{
        // console.log(event.target.value) permite ir copiando cada caracter inngresdo en el input
       setDatos({
           ...datos, //aqui se crea una pseudo copia de cada valor para que no se borre el anterior
           [event.target.name] : event.target.value // se relaciona lo que hay en el input con su name y el valor de la estructura en estado
       })
   }
   const onSubmit = async (event,e) =>{
    console.log(datos);
    try {
        
        const newData = await fetch('http://localhost:9000/gestionarEventos',{
            method :'POST',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(datos)})
            console.log(datos);
            setMensaje('Evento Creado Exitosamente');
        
        
    } catch (error) {
        setMensaje('Llena los campos del formulario correctamente')
        console.log("hubo un error al enviar los datos")
        console.log(error);
        
    }
    e.target.reset();
}


    const [mensaje, setMensaje] = useState('')
    
    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                </div>
                <div className="row">

                    <div className="col-sm-6 mb-3">
                        <label >Nombre del Evento </label>
                        <input type="text" className="form-control" 
                            id="nombreEvento" placeholder="Introduzca el nombre del evento" 
                            name="nombreEvento" 
                            onChange={handleInputChange}
                            required="true" />
                    </div>
                    <div className="col-sm-3 mb-3">
                        <label >Cuota "Gana local" </label>
                        <input type="text" className="form-control" 
                            id="cuota1" placeholder="Introduzca un valor" 
                            name="cuota1" 
                            onChange={handleInputChange}
                            required="true" />
                    </div>


                </div>

                <div className="row">

                    <div className="col-sm-6 mb-3">
                        <label >Nombre de la liga </label>
                        <input type="text" className="form-control" 
                            id="nombreLiga"  
                            onChange={handleInputChange}
                            name="nombreLiga" 
                            placeholder="Introduzca el nombre de la liga" 
                            required="true" />
                    </div>

                    <div className="col-sm-3 mb-3">
                        <label >Cuota "Gana Visitante" </label>
                        <input type="text" className="form-control" 
                            id="cuota2" 
                            placeholder="Introduzca un valor"
                            name="cuota2" 
                            onChange={handleInputChange}
                            required="true" />
                    </div>


                </div>



                <div className="row">

                    <div className="col-sm-3 mb-3">
                        <label>Fecha de inicio</label>
                        <input type="date" className="form-control" 
                            id="dateInit" 
                            name="dateInit" 
                            placeholder="Nombre de usuario"
                            onChange={handleInputChange} 
                            required="true" />
                    </div>
                    <div className="col-sm-3 mb-3">
                        <label>Hora de inicio</label>
                        <input type="time" className="form-control"
                            id="timeInit"
                            name="timeInit"
                            placeholder="Hora de inicio"
                            onChange={handleInputChange}
                            required="true" />

                    </div>
                    <div className="col-sm-3 mb-3">
                        <label >Cuota "Empate" </label>
                        <input type="text" className="form-control" 
                            id="cuotaX"  
                            name="cuotaX" 
                            placeholder="Introduzca un valor" 
                            onChange={handleInputChange}
                            required="true" />
                    </div>
                </div>
                <div className="row">

                    <div className="col-sm-3 mb-3">
                        <label>Fecha limite de cancelación</label>
                        <input type="date" className="form-control" 
                            id="limitDate" 
                            placeholder="introduzca limite de cancelacion" 
                            name='limitDate'
                            onChange={handleInputChange}
                            required="true" />
                    </div>
                    

                </div>



                <button className="btn btn-primary" type="submit">Crear Evento</button>
                <div className="row mt-2">
                    <div className="col-12 text-center">{mensaje}</div>
                </div>  
            </form>
        </>


    );
};

export default CrearEvento;