/* para generar rcc
componente tipo clase 
tiene constructores, estado privado, props */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

        constructor(props){
            super(props);
            /*el state y .setstate solo se puede crear en un componente tipo CLASE, 
        JAMAS en una funcion */
            this.state = {
                age: 29
            }
        }

    render() {
        return (
            <div>
                <h1>Bienvenidx a mi app {this.props.name} :D</h1>
                {/* en App.js vamos a parar en el comp Greeting la propiedad (props), 
                en este caso es "name"*/}
                <h2>Tu edad es de {this.state.age}</h2>
                <button onClick={this.birthday}>cumplir años</button>
            </div>
        );
            }

    /*funcion onclick del boton*/
    birthday = () => {
        this.setState((prevState) => (
                {
                    age: prevState.age +1
                }
        ))
        }
    }



/* Aca podemos definir el tipo de elemento de la propiedad (props)
Proptype.string (tipo texto)*/
Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
