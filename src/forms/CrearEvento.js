import react from 'react';

const CrearEvento = () =>{

    return(
        <>
            <form>{/*  id mixtos, verificar validacions */}
                <div className="row">
                </div>
                <div className="row">

                    <div className="col-sm-6 mb-3">
                        <label >Nombre del Evento </label>
                        <input type="text" className="form-control" id="validationDefault01" placeholder="Introduzca el nombre del evento" required />
                    </div>
                    <div className="col-sm-3 mb-3">
                        <label >Cuota "Gana local" </label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="Introduzca un valor" required />
                    </div>


                </div>

                <div className="row">

                    <div className="col-sm-6 mb-3">
                        <label >Nombre de la liga </label>
                        <input type="text" className="form-control" id="validationDefault01" placeholder="Introduzca el nombre de la liga" required />
                    </div>
                    <div className="col-sm-3 mb-3">
                        <label >Cuota "Gana Visitante" </label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="Introduzca un valor" required />
                    </div>


                </div>



                <div className="row">

                    <div className="col-sm-3 mb-3">
                        <label>Fecha de inicio</label>
                        <input type="date" className="form-control" id="validationDefault01" placeholder="Nombre de usuario" required />
                    </div>
                    <div className="col-sm-3 mb-3">
                        <label>Hora de inicio</label>
                        <input type="time" className="form-control" id="validationDefault02" placeholder="contraseña" required />
                    </div>
                    <div className="col-sm-3 mb-3">
                        <label >Cuota "Empate" </label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="Introduzca un valor" required />
                    </div>
                </div>
                <div className="row">

                    <div className="col-sm-3 mb-3">
                        <label>Fecha limite de cancelación</label>
                        <input type="date" className="form-control" id="validationDefault01" placeholder="Nombre de usuario" required />
                    </div>
                    <div className="col-sm-3 mb-3">
                        <label>Hora limite de cancelación</label>
                        <input type="time" className="form-control" id="validationDefault02" placeholder="contraseña" required />
                    </div>

                </div>



                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </>


    );
};

export default CrearEvento;