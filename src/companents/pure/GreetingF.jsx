/*Rfcp para generar estructura con proptypes
componente funcion (funcional)
puede devolver un componente html, }
y a traves de hooks pude interartuar con las clases*/
import React from 'react';
import PropTypes from 'prop-types';
//para usar useState (hook) es necesario importarlo
import {useState} from 'react';


const GreetingF = (propiedades) => {

    //Instrod a useState
    //const [variable, metodo para actualizar] = useState(valor inicial)
    const [age, setage] = useState(0);

    const cumple = () => {
        //actualizamos estado
        setage(age +1)
    }

    return (
        <div>
        <h2>Componente Greeting F- funcional</h2>
        <h3>Hola {propiedades.name}</h3>
        <h3>Tu edad es de {age} años</h3>
        <button onClick={cumple}>Acyualiza tu edad aqui</button>
            
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string,
};


export default GreetingF;
