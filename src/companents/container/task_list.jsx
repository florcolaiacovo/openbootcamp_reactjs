//rcfp (segundo -functionprops proptype=> podemos borrarlo)

/*
compuesto por: 
(carpeta models)
task.class.js
levels.js

(carpeta container)
task_list.jsx
task.jsx
*/
import React from 'react';
import { LEVELS } from '../../models/levels';
import { Task } from '../../models/task.class';
import TaskComponent from './task';



const TaskListComponent = () => {

    const defaultTask = new Task ('tarea de ejemplo', 'descripcion por default', false, LEVELS.NORMAL)
/*
    const changeState = (id) => {
        console.log('todo: cambiar estado de una tarea')
    }
    */


    return (
        <div>
            <div>
                Lista de tareas:
            </div>
            <TaskComponent tarea={defaultTask}></TaskComponent>
        </div>
        /*Aplicar FOR ó MAP para renderizar una lista */
    );
};




export default TaskListComponent;
