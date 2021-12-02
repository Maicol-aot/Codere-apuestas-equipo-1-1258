import React from 'react';

const GestionarUsuarios = () =>{
    return(
        <>
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Gestionar Usuarios</h1>
                    <nav>
                        <ol class="breadcrumb">
                            
                        </ol>
                    </nav>
                </div>{/*<!-- End Page Title -->*/}

                <section className="section profile">
                    <div className="row">
                    

                        <div className="col-xl-8">

                            <div className="card">
                                <div className="card-body pt-3">
                                    {/*<!-- Bordered Tabs -->*/}
                                    <ul className="nav nav-tabs nav-tabs-bordered">

                                        <li className="nav-item">
                                            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Usuarios</button>
                                        </li>

                                        <li className="nav-item">
                                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Crear Usuario</button>
                                        </li>

                                    </ul>
                                    <div className="tab-content pt-2">
                                        <div class="tab-pane fade show active profile-overview" id="profile-overview">
                                            <h5 class="card-title">About</h5>

                                        </div>

                                        <div className="tab-pane fade profile-edit pt-3" id="profile-edit">

                                            {/*<!-- Profile Edit Form -->*/}
                                            <form>
                                                <div className="row mb-3">
                                                    
                                                </div>

                                                <div className="row mb-3">
                                                    <label for="fullName" className="col-md-4 col-lg-3 col-form-label">Nombre</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="fullName" type="text" className="form-control" id="fullName" value="Kevin"/>
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label for="about" className="col-md-4 col-lg-3 col-form-label">Primer Apellido</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="about" className="form-control" id="about" value=" Anderson" />
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label for="company" className="col-md-4 col-lg-3 col-form-label">Segundo Apellido</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="company" type="text" className="form-control" id="company" value="Lueilwitz"/>
                                                    </div>
                                                </div>
                                            
                                                <div className="row mb-3">
                                                    <label for="username" className="col-md-4 col-lg-3 col-form-label">Nombre de usuario</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="usernametxt" type="text" className="form-control" id="username" value="Web Designer"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label for="username" className="col-md-4 col-lg-3 col-form-label">Contraseña</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="usernametxt" type="text" className="form-control" id="username" value="password"/>
                                                    </div>
                                                </div>
                                                <div class="input-group mb-3">
                                                    <label className="col-md-4 col-lg-3 col-form-label" for="inputGroupSelect01">Tipo de Usuario</label>
                                                    <select class="form-select" id="inputGroupSelect01">
                                                        <option selected>Elige una opcion...</option>
                                                        <option value="1">admin</option>
                                                        <option value="2">intern</option>
                                                        <option value="3">user</option>
                                                    </select>
                                                </div>

                                                <div class="input-group mb-3">
                                                    <label className="col-md-4 col-lg-3 col-form-label" for="inputGroupSelect01">Tipo de documento</label>
                                                    <select class="form-select" id="inputGroupSelect01">
                                                        <option selected>Elige una opcion...</option>
                                                        <option value="1">Cédula de ciudadania</option>
                                                        <option value="2">Cédula de extranjería</option>
                                                        <option value="3">Pasaporte</option>
                                                    </select>
                                                </div>

                                                <div className="row mb-3">
                                                    <label for="Job" className="col-md-4 col-lg-3 col-form-label">Numero de documento</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="job" type="text" className="form-control" id="Job" value="11234567898"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label for="Job" className="col-md-4 col-lg-3 col-form-label">Lugar de expedicíon</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="job" type="text" className="form-control" id="Job" value="Barranquilla"/>
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label for="Country" className="col-md-4 col-lg-3 col-form-label">Pais de residencia</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="country" type="text" className="form-control" id="Country" value="Colombia"/>
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
                                                    <button type="submit" className="btn btn-primary">Enviar</button>
                                                </div>
                                            </form>{/*<!-- End Profile Edit Form -->*/}

                                        </div>

                                        

                                    </div>{/*<!-- End Bordered Tabs -->*/}

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>



        </>
    );
};

export default GestionarUsuarios;