import React from 'react';

const Paginator = () =>{
    return(
        <>
            <nav aria-label="Page navigation example" className="m-auto">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="none">Anterior</a></li>
                    <li className="page-item"><a className="page-link" href="none">1</a></li>
                    <li className="page-item"><a className="page-link" href="none">2</a></li>
                    <li className="page-item"><a className="page-link" href="none">3</a></li>
                    <li className="page-item"><a className="page-link" href="none">Siguiente</a></li>
                </ul>
            </nav>


        </>
    );
};

export default Paginator;