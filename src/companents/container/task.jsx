//rfcp prptypes y const

/*compuesto por: 
(carpeta models)
task.class.js
levels.js

(carpeta container)
task_list.jsx
task.jsx
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';


const TaskComponent = ({tarea}) => {
    return (
        <div>
            <h2>Lista de tareas:</h2>
            <h3>Nombre de la tarea: {tarea.name}</h3>
            <h3>Descripcion: {tarea.description}</h3>
            <h4>Level: {tarea.level}</h4>
            <h5>Estado de tarea: {tarea.completed ? 'finalizada' : 'pendiente'}</h5>
        </div>
    );
};


TaskComponent.propTypes = {
    tarea : PropTypes.instanceOf(Task)
};

export default TaskComponent;