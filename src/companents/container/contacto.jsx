import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contacto.class'



const ContactComponent = ({props}) => {
    return (
        <div>
            <h2>Usuario: {props.nombre} {props.apellido}</h2>
            <h3>Email: {props.email}</h3>
            <h5>Estado: {props.conectado ? 'Conectado' : 'No conectado'}</h5>
        </div>
      )
}

ContactComponent.propTypes = {
    props: PropTypes.instanceOf(Contacto)
}

export default ContactComponent;
