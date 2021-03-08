import React, { Fragment } from 'react'

import Task from './Task'

const ListTasks = () => {

    const tasks = [
        {name: 'Plataforma', status: true},
        {name: 'Colores', status: false},
        {name: 'Pasarela de Pago', status: true},
    ]

    return (
        <Fragment>
            <h2>Project: Tienda</h2>
            <ul className="listado-tareas">
                {tasks.length === 0
                    ? (<li className="tarea"><p>Empty</p></li>)
                    : tasks.map(t => (
                        <Task 
                            key={t.name}
                            task={t}
                        />
                    ))
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
            >Delete Project &times;</button>
        </Fragment>
    )
}

export default ListTasks