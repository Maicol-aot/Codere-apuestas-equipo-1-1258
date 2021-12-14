import React from 'react';
import RegistroNavBar from '../components/General/RegistroNavBar';
import RegistroForm from '../forms/RegistroForm';


const Registro = () => {
    return (
        <>
            <link href="/assets/css/styleMaicol.css" rel="stylesheet"/>
            <link href="/assets/css/Registro.css" rel="stylesheet"/>
            <RegistroNavBar />
            <RegistroForm />
        </>
        
    );
};

export default Registro;