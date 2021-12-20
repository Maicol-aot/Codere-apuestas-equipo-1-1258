const Pick = (props) =>{
    return(
        <>
        
            <tr>
                <td>
                    <h6 className="vs">{props.nombreEventos}</h6>
                    <p className="nombreLiga">{props.nombreLiga}</p>
                    <p className="estado">Abierto</p>
                    <p >{props.dateInit} - {props.timeInit}</p>
                    <input type="button" className="equipo1" value={props.cuota1} />
                    <input type="button" className="empate" value={props.cuotaX} />
                    <input type="button" className="equipo2" value={props.cuota2} />
                </td>
            </tr>
        </>
    );
};

export default Pick;