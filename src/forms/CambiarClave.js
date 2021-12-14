import React from 'react';

const CambiarClave = () =>{
    return(
        <>
             <form> {/*ids originales */}
                
                <div className="row mb-3">
                    <label for="currentPassword" className="col-md-4 col-lg-3 col-form-label">Clave Actual</label>
                    <div className="col-md-8 col-lg-9">
                        <input name="password" type="password" className="form-control" id="currentPassword" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label for="newPassword" className="col-md-4 col-lg-3 col-form-label">Nueva contraseña</label>
                    <div className="col-md-8 col-lg-9">
                        <input name="newpassword" type="password" className="form-control" id="newPassword" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label for="renewPassword" className="col-md-4 col-lg-3 col-form-label">Repita la nueva contraseña</label>
                    <div className="col-md-8 col-lg-9">
                        <input name="renewpassword" type="password" className="form-control" id="renewPassword" />
                    </div>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Cambiar contraseña</button>
                </div>
            </form>
        </>
    );
};

export default CambiarClave;
