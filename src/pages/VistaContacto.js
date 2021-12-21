import React from 'react';
import NavBar from '../components/General/NavBar';
import Footer from "../components/General/Footer";
import { Navigate } from 'react-router-dom';

const  VistaContacto = () =>{


const adminSesion = localStorage.getItem('admin');
const usuarioSesion = localStorage.getItem('usuarioEx');
  if(usuarioSesion !== null){
    return(
        <>
        <NavBar />
        <link href="/assets/css/styleMaicol.css" rel="stylesheet"/>
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Contáctenos</h1>
                    
                </div>

                <section className="section contact">

                    <div className="row gy-4">

                        <div className="col-xl-6">

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="info-box card">
                                        <i className="bi bi-geo-alt"></i>
                                        <h3>Direccion</h3>
                                        <p>Ak.103 No. 25F-12,<br />Bogotá, Colombia  </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="info-box card">
                                        <i className="bi bi-telephone"></i>
                                        <h3>Llamanos</h3>
                                        <p>+57 321-369-2633<br /> 018000262626</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="info-box card">
                                        <i className="bi bi-envelope"></i>
                                        <h3>Escribenos</h3>
                                        <p>soporte@codere.com<br />info@codere.com</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="info-box card">
                                        <i className="bi bi-clock"></i>
                                        <h3>Horario de Atención</h3>
                                        <p>Lunes - Viernes<br />9:00AM - 8:00PM</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-xl-6">
                            <div className="card p-4">
                                <form action="forms/contact.php" method="post" className="php-email-form">
                                    <div className="row gy-4">

                                        <div className="col-md-6">
                                            <input type="text" name="name" className="form-control" placeholder="Ingresa tu nombre" required />
                                        </div>

                                        <div className="col-md-6 ">
                                            <input type="email" className="form-control" name="email" placeholder="Ingresa tu correo electronico" required />
                                        </div>

                                        <div className="col-md-12">
                                            <input type="text" className="form-control" name="subject" placeholder="Asunto" required />
                                        </div>

                                        <div className="col-md-12">
                                            <textarea className="form-control" name="message" rows="6" placeholder="Escribe aqui tu mensaje" required></textarea>
                                        </div>

                                        <div className="col-md-12 text-center">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>

                                            <button type="submit">Enviar Mensaje</button>
                                        </div>

                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>

                </section>

            </main>
        <Footer />
       
        </>
    );
  }else if(adminSesion !==null){
    return  <Navigate to="/dashboard" />
  }else if(usuarioSesion == null && adminSesion == null){
    return  <Navigate to="/404" />}
};

export default VistaContacto;