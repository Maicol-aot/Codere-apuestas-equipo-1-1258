import React from 'react';
import Pick from './Pick';

const TablaFeed = (props) =>{

    const Eventos =props.Eventos;
    const ListaFeed = Eventos.map ( p =>
        <Pick 
            nombreEventos = {p.nombreEvento}
            dateInit = {p.dateInit}
            timeInit={p.timeInit}
            cuota1 = {p.cuota1}
            cuota2 = {p.cuota2}
            cuotaX = {p.cuotaX}
        
        />);


    return (
        <>
            <link href="/assets/css/TablaFeed.css" rel="stylesheet"/>
            <table className="table table-bordered">
                <tbody>
                    {ListaFeed}
                </tbody>
            </table>
        </>
    );
};

export default TablaFeed;