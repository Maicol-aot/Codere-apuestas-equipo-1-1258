import React from 'react';

const DisplayTicketApuestas = () =>{
    return (
        <div className="card">
            <link href="/assets/css/DisplayTicketApuestas.css" rel="stylesheet"/>

            <div className="card-body pb-0">
                <h5 className="card-title">Tickets de apuestas</h5>
                <hr id="div"/>
                <div className="news">
                    {/* 
                    <div className="post-item clearfix">
                        <img src="assets/img/news-1.jpg" alt=""/>
                        <h4><a href="#">Nihil blanditiis at in nihil autem</a></h4>
                        <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
                    </div>*/}

                    <div className="post-item clearfix">  
                        <p>Tus apuestas apareceran aqui</p>
                    </div>
                </div>{/*{/*<!-- End sidebar recent posts-->*/}

            </div>

        </div>
    );
};

export default DisplayTicketApuestas;