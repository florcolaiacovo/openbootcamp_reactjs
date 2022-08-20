import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactComponent from './contacto';


const ContactoListComponent = () => {

    const defaultContacto = new Contacto ('Oscar', 'Cotta', 'oscaralbertocotta@gmail.com', false)


    return (
        <div>
            <h2>Contactos:</h2>
            <ContactComponent props={defaultContacto}></ContactComponent>
        </div>
    );
};



export default ContactoListComponent;


