import axios from 'axios';
import config from '../../config/config.json';

// const path = 'users/lista';

const traerUsuario = async (data) => {
    // const url = `${config.PROTOCOL}://${config.HOST}/${path}/UsuariosActivos`;
    const url =  'http://localhost:9000/users/lista';
    try {
        const response = await axios.get(url, data);
        return response.data;
    } catch (e) {
        console.log(e);
    }
         
}

export { traerUsuario };