import React, { Fragment, useContext } from 'react'

import Task from './Task'

import projectContext from '../../context/Projects/projectContext'

const ListTasks = () => {

    // GET FORM STATE 
    const projectsContext = useContext(projectContext)
    const { project, deleteProject } = projectsContext

    // 
    if (!project) return <h2>Choose a project</h2>

    // 
    const [ currentProject ] = project

    const tasks = [
        {name: 'Plataforma', status: true},
        {name: 'Colores', status: false},
        {name: 'Pasarela de Pago', status: true},
    ]

    return (
        <Fragment>
            <h2>Project: {currentProject.name}</h2>
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
                onClick={() => deleteProject(currentProject.id)}
            >Delete Project &times;</button>
        </Fragment>
    )
}

export default ListTasks