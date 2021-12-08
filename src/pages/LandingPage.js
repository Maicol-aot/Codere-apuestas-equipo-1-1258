import React from 'react';
import Footer from '../components/Footer';
import {Link} from "react-router-dom";

const LandingPage = () => {
    return (
        <>
            

            <link href="/assets/css/LandingPage.css" rel="stylesheet"/>
            <header id="header" className="header fixed-top d-flex align-items-center">
            

                <div className="d-flex align-items-center justify-content-between">
                    <Link to="/" className="logo d-flex align-items-center" >
                        <img src="assets/img/Codere_Logo_verde.png" id="logoCodere" alt="Codere logo"/>
                    </Link>
                    
                </div>
                <div className="buttons">
                    <Link to="/login">
                        <input type="button" class="buttons-Acceso" value="Acceso"></input>
                    </Link>
                    <Link to="/registro">
                        <input type="button" class="buttons-Registro" value="Registro"></input> 
                    </Link>
                                           
                </div>   
            </header>
            
            
            <section className="displaySlide">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/assets/img/softballl.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="/assets/img/softball2.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="/assets/img/softball3.jpg" class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </section>

            <div className="bienvenida">
                <div className="bienvenida-title">
                    <h3 className="">Bienvenido a la casa de apuestas Codere</h3>
                </div>
                
                <div className="bienvenida-cont">
                    <p className="">Aquí en Codere podrás apostar por tus equipos favoritos de softball, en un ambiente seguro y de confianza en la cual
                    podrás hacer dinero real de manera online. Aquí en la mejor casa de apuestas del mundo, tendrás la posibilidad de
                    apostar por diferentes equipos de diversas ligas a nivel mundial, a su vez puedes visualizar tu historial de apuestas
                    de una manera fácil y rápida. </p>                    
                </div>
            </div>

            <div className="explicacion">
                <div className="explicacion-title">
                    <h3 className="title-howto">Apostar en Codere</h3>
                </div>
                <div className="explicacion-pasos">
                    <p className="howto">Para empezar a utilizar codere es tan secillo como hacer dos simples pasos:</p>
                    <p className="points"> 1. Registrate en nuestra plataforma</p>
                    <p className="points">2. Empieza a apostar:</p>
 	                <p className="point2">Podrás apostar por tres diferentes resultados: Si el equipo gana, pierde o empata</p>
                    <p>Pon aprueba tus habilidades y empieza a apostar ya!</p>                     
                </div>
                <Link to="/registro">
                    <input type="button" className="registrarse" value="Registrate ahora"/>
                </Link>
                
            </div>
            
                    
         
                
                
                   
               
          

            
            <Footer />
           
        </>
    );

};

export default LandingPage;