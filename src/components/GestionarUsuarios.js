import React from 'react';

const GestionarUsuarios = () =>{
    return(
        <>
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Gestionar Usuarios</h1>
                    <nav>
                        <ol className="breadcrumb">

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
                                        <div className="tab-pane fade show active profile-overview" id="profile-overview">
                                            <h5 className="card-title">About</h5>

                                        </div>

                                        <div className="tab-pane fade profile-edit pt-3" id="profile-edit">

                                            {/*<!-- Profile Edit Form -->*/}
                                            <form>
                                                <div className="row">
                                                </div>
                                                <div className="row">
                                                    <label >Datos personales </label>
                                                    <div className="col-sm-3 mb-3">

                                                        <input type="text" className="form-control" id="validationDefault01" placeholder="Nombre" required />
                                                    </div>
                                                    <div className="col-sm-3 mb-3">

                                                        <input type="text" className="form-control" id="validationDefault02" placeholder="Primer apellido" required />
                                                    </div>
                                                    <div className="col-sm-3 mb-3">

                                                        <input type="text" className="form-control" id="validationDefault02" placeholder="Segundo apellido" required />
                                                    </div>

                                                    <div className="col-sm-3 mb-3">

                                                        <input type="date" className="form-control" id="validationDefault02" placeholder="Fecha de nacimiento" required />
                                                    </div>


                                                </div>
                                                <div className="row">
                                                    <label >Datos de identificacíon</label>
                                                    <div className="col-sm-3 mb-3">
                                                        <select className="custom-select mr-sm-2 form-control " id="inlineFormCustomSelect">
                                                            <option selected>Tipo de documento</option>
                                                            <option value="1">Cédula de ciudadania</option>
                                                            <option value="2">Cédula de extranjería</option>
                                                            <option value="3">Pasaporte</option>
                                                        </select>

                                                    </div>
                                                    <div className="col-sm-3 mb-3">

                                                        <input type="text" className="form-control" id="validationDefault02" placeholder="Numero de documento" required />
                                                    </div>
                                                    <div className="col-sm-3 mb-3">

                                                        <input type="text" className="form-control" id="validationDefault02" placeholder="Lugar de expedicíon" required />
                                                    </div>

                                                    <div className="col-sm-3 mb-3">

                                                        <input type="date" className="form-control" id="validationDefault02" placeholder="Fecha de Expedicion" required />
                                                    </div>


                                                </div>
                                                <div className="row">
                                                    <label>Datos de contacto</label>
                                                    <div className="col-sm-3 mb-3">

                                                        <input type="text" className="form-control" id="validationDefault01" placeholder="Correo electronico" required />
                                                    </div>
                                                    <div className="col-sm-3 mb-3">

                                                        <input type="text" className="form-control" id="validationDefault02" placeholder="Pais de residencia" required />
                                                    </div>
                                                    <div className="col-sm-3 mb-3">

                                                        <input type="text" className="form-control" id="validationDefault02" placeholder="Teléfono" required />
                                                    </div>




                                                </div>
                                                <div className="row">
                                                    <label>Datos de usuario</label>
                                                    <div className="col-sm-3 mb-3">

                                                        <input type="text" className="form-control" id="validationDefault01" placeholder="Nombre de usuario" required />
                                                    </div>
                                                    <div className="col-sm-3 mb-3">

                                                        <input type="text" className="form-control" id="validationDefault02" placeholder="contraseña" required />
                                                    </div>
                                                    <div className="col-sm-3 mb-3">


                                                        <select className="custom-select mr-sm-2 form-control " id="inlineFormCustomSelect">
                                                            <option selected>Tipo de usuario</option>
                                                            <option value="1">Administrador</option>
                                                            <option value="2">Interno</option>
                                                            <option value="3">Usuario</option>
                                                        </select>


                                                    </div>




                                                </div>
                                                <button className="btn btn-primary" type="submit">Enviar</button>
                                            </form>

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