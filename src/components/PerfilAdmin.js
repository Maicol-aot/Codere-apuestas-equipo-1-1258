import React from 'react';

const PerfilAdmin = () =>{
    return(
        <>
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Perfil</h1>
                </div>{/*<!-- End Page Title -->*/}

                <section className="section profile">
                    <div className="row">
                        <div className="col-xl-4">

                            <div className="card">
                                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                                    <img src="assets/img/super_admin.png" alt="Profile" className="rounded-circle"/>
                                    <h2>Kevin Anderson</h2>
                                    <h3>Administrador</h3>
                                    
                                </div>
                            </div>

                        </div>

                        <div className="col-xl-8">

                            <div className="card">
                                <div className="card-body pt-3">
                                    {/*<!-- Bordered Tabs -->*/}
                                    <ul className="nav nav-tabs nav-tabs-bordered">

                                        <li className="nav-item">
                                            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">General</button>
                                        </li>

                                        <li className="nav-item">
                                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Editar perfil</button>
                                        </li>

                                        <li className="nav-item">
                                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Cambiar contraseña</button>
                                        </li>

                                    </ul>
                                    <div className="tab-content pt-2">

                                        <div className="tab-pane fade show active profile-overview" id="profile-overview">

                                            <h5 className="card-title">Detalles</h5>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label ">Nombre completo</div>
                                                <div className="col-lg-9 col-md-8">Kevin Anderson</div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Usuario</div>
                                                <div className="col-lg-9 col-md-8">k_anderson</div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Codigo de empleado</div>
                                                <div className="col-lg-9 col-md-8">535022</div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Tipo de usuario</div>
                                                <div className="col-lg-9 col-md-8">Administrador</div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Pais de residencia</div>
                                                <div className="col-lg-9 col-md-8">Colombia</div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Telefono</div>
                                                <div className="col-lg-9 col-md-8">(436) 486-3538 x29071</div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Email</div>
                                                <div className="col-lg-9 col-md-8">k.anderson@example.com</div>
                                            </div>

                                        </div>

                                        <div className="tab-pane fade profile-edit pt-3" id="profile-edit">

                                            {/*<!-- Profile Edit Form -->*/}
                                            <form>


                                                <div className="row mb-3">
                                                    <label for="fullName" className="col-md-4 col-lg-3 col-form-label">Nombre Completo</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="fullName" type="text" className="form-control" id="fullName" value="Kevin Anderson"/>
                                                    </div>
                                                </div>

                                                

                                                <div className="row mb-3">
                                                    <label for="company" className="col-md-4 col-lg-3 col-form-label">Usuario</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="company" type="text" className="form-control" id="username" value="Lueilwitz, Wisoky and Leuschke"/>
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label for="Job" className="col-md-4 col-lg-3 col-form-label">Codigo de empleado</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="job" type="text" className="form-control" id="job" value="89658"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label for="Address" className="col-md-4 col-lg-3 col-form-label">Permisos</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="address" type="text" className="form-control" id="role" value="Administrador"/>
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label for="Country" className="col-md-4 col-lg-3 col-form-label">Pais de residencia</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="country" type="text" className="form-control" id="Country" value="USA"/>
                                                    </div>
                                                </div>


                                                <div className="row mb-3">
                                                    <label for="Phone" className="col-md-4 col-lg-3 col-form-label">Teléfono</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="phone" type="text" className="form-control" id="Phone" value="(436) 486-3538 x29071"/>
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label for="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="email" type="email" className="form-control" id="Email" value="k.anderson@example.com"/>
                                                    </div>
                                                </div>

                                                

                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary">Guardar cambios</button>
                                                </div>
                                            </form>{/*<!-- End Profile Edit Form -->*/}

                                        </div>

                                        

                                        

                                        <div className="tab-pane fade pt-3" id="profile-change-password">
                                            {/*<!-- Change Password Form -->*/}
                                            <form>

                                                <div className="row mb-3">
                                                    <label for="currentPassword" className="col-md-4 col-lg-3 col-form-label">Clave Actual</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="password" type="password" className="form-control" id="currentPassword"/>
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label for="newPassword" className="col-md-4 col-lg-3 col-form-label">Nueva contraseña</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="newpassword" type="password" className="form-control" id="newPassword"/>
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label for="renewPassword" className="col-md-4 col-lg-3 col-form-label">Repita la nueva contraseña</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="renewpassword" type="password" className="form-control" id="renewPassword"/>
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary">Cambiar contraseña</button>
                                                </div>
                                            </form>{/*<!-- End Change Password Form -->*/}

                                        </div>

                                    </div>{/*<!-- End Bordered Tabs -->*/}

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>{/*<!-- End #main -->*/}

            

        </>
    );
};

export default PerfilAdmin;