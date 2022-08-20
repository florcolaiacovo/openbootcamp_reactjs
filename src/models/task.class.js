/*clase con tareas con: 
nombre, descripcion y nivel de urgencia

compuesto por: 
(carpeta models)
task.class.js
levels.js

(carpeta container)
task_list.jsx
task.jsx
*/

//IMPORTAR MANUELMENTE LIVELS-JS
import {LEVELS} from './levels'


export class Task{
    name = '';
    description = '';
    completed = false;
    level = LEVELS.NORMAL;

    constructor(name, description, completed, level){
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level;
    }
}