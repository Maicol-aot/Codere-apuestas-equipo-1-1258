import React from 'react';

const TablaFeed = () =>{
    return (
        <>
            <link href="/assets/css/TablaFeed.css" rel="stylesheet"/>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td>
                            <h6 className="vs">Equipo1 vs Equipo2</h6>
                            <p className="nombreLiga">Liga de softball 1</p>
                            <p className="estado">Abierto</p>
                            <a href="www.google.com">Mas informacion</a>
                            <input type="button" className="equipo1"value="Equipo 1"/> 
                            <input type="button" className="empate"value="X"/> 
                            <input type="button" className="equipo2"value="Equipo 2"/> 
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h6 className="vs">Equipo1 vs Equipo2</h6>
                            <p className="nombreLiga">Liga de softball 1</p>
                            <p className="estado">Abierto</p>
                            <a href="www.google.com">Mas informacion</a>
                            <input type="button" className="equipo1"value="Equipo 1"/> 
                            <input type="button" className="empate"value="X"/> 
                            <input type="button" className="equipo2"value="Equipo 2"/> 
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <h6 className="vs">Equipo1 vs Equipo2</h6>
                            <p className="nombreLiga">Liga de softball 1</p>
                            <p className="estado">Abierto</p>
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