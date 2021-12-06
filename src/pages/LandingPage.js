import React from 'react';
import Footer from '../components/Footer';

const LandingPage = () => {
    return (
        <>
            

            <link href="/assets/css/LandingPage.css" rel="stylesheet"/>
            <header id="header" className="header fixed-top d-flex align-items-center">
            

                <div className="d-flex align-items-center justify-content-between">
                    <a href="dashboard.html" className="logo d-flex align-items-center" >
                        <img src="assets/img/Codere_Logo_verde.png" id="logoCodere" alt="Codere logo"/>
                    </a>
                    
                </div>
                <div className="buttons">
                    <input type="button" class="buttons-Acceso" value="Acceso"></input>
                    <input type="button" class="buttons-Registro" value="Registro"></input>                        
                </div>   
            </header>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="/assets/img/img1.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src="/assets/img/img2.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src="/assets/img/img3.jpg" class="d-block w-100" alt="..."/>
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

            <section className="seccionBienvenida">
                
            </section>
           
        </>
    );

};

export default LandingPage;