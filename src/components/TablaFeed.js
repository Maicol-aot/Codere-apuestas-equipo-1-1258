import React from 'react';

const TablaFeed = (props) =>{
    return (
        <>
            <link href="/assets/css/TablaFeed.css" rel="stylesheet"/>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td>
                            <h6 className="vs">{ props.equipo1 } vs {props.equipo2}</h6>
                            <p className="nombreLiga">{ props.liga }</p>
                            <p className="estado">{ props.estado }</p>
                            <a href="www.google.com">Mas informacion</a>
                            <input type="button" className="equipo1"value="Equipo 1"/> 
                            <input type="button" className="empate"value="X"/> 
                            <input type="button" className="equipo2"value="Equipo 2"/> 
                        </td>
                    </tr>           
                </tbody>
            </table>
        </>
    );
};

export default TablaFeed;