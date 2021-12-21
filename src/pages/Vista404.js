import React from 'react';
import { Link } from 'react-router-dom';

const Vista404 = () =>{
    return(
        <>
            <main>
                <div className="container">

                    <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                        <h1>404</h1>
                        <h2>La pagina que estas buscando no existe.</h2>
                        <Link to ="/"className="btn" >Volver al inicio</Link>
                        <img src="assets/img/not-found.svg" className="img-fluid py-5" alt="Page Not Found" />
                        <div className="credits">
                            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                        </div>
                    </section>

                </div>
            </main>


        </>
    );
};

export default Vista404;