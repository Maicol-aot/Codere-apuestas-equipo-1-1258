import react from 'react';



const EditarPerfil = () =>{
    return(
        <>
            <form> {/*ids mixtos */}


                <div className="row mb-3">
                    <label for="fullName" className="col-md-4 col-lg-3 col-form-label">Nombre Completo</label>
                    <div className="col-md-8 col-lg-9">
                        <input name="fullName" type="text" className="form-control" id="fullName" value="Kevin Anderson" />
                    </div>
                </div>



                <div className="row mb-3">
                    <label for="company" className="col-md-4 col-lg-3 col-form-label">Usuario</label>
                    <div className="col-md-8 col-lg-9">
                        <input name="company" type="text" className="form-control" id="username" value="Lueilwitz, Wisoky and Leuschke" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label for="Job" className="col-md-4 col-lg-3 col-form-label">Codigo de empleado</label>
                    <div className="col-md-8 col-lg-9">
                        <input name="job" type="text" className="form-control" id="job" value="89658" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="Address" className="col-md-4 col-lg-3 col-form-label">Permisos</label>
                    <div className="col-md-8 col-lg-9">
                        <input name="address" type="text" className="form-control" id="role" value="Administrador" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label for="Country" className="col-md-4 col-lg-3 col-form-label">Pais de residencia</label>
                    <div className="col-md-8 col-lg-9">
                        <input name="country" type="text" className="form-control" id="Country" value="USA" />
                    </div>
                </div>


                <div className="row mb-3">
                    <label for="Phone" className="col-md-4 col-lg-3 col-form-label">Teléfono</label>
                    <div className="col-md-8 col-lg-9">
                        <input name="phone" type="text" className="form-control" id="Phone" value="(436) 486-3538 x29071" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label for="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                    <div className="col-md-8 col-lg-9">
                        <input name="email" type="email" className="form-control" id="Email" value="k.anderson@example.com" />
                    </div>
                </div>



                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Guardar cambios</button>
                </div>
            </form>


        </>
    );

};

export default EditarPerfil;
