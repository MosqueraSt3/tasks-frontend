import React, { useContext } from 'react'

import projectContext from '../../context/Projects/projectContext'
import taskContext from '../../context/tasks/taskContext'

const Project = ({task}) => {

    // GET FORM STATE 
    const projectsContext = useContext(projectContext)
    const { project } = projectsContext

    // TASK CONTEXT
    const tasksContext = useContext(taskContext)
    const { deleteTask,getTasksById,changeStatusTask,focusOnCurrentTask } = tasksContext

    const [currentProject] = project

    const changeStatus = task => {
        if (task.status) {
            task.status = false
        } else {
            task.status = true
        }
        changeStatusTask(task)
    }

    return (
        <li className="tarea sombra">
            <p>{task.name}</p>
            <div className="estado">
                {task.status 
                    ?
                        (
                            <button
                                type="button"
                                className="completo"
                                onClick={() => changeStatus(task)}
                            >Complete</button>
                        )
                    :
                        (
                            <button
                                type="button"
                                className="incompleto"
                                onClick={() => changeStatus(task)}
                            >Incomplete</button>
                        )
                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => focusOnCurrentTask(task)}
                >Edit</button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => {
                        deleteTask(task.id)
                        getTasksById(currentProject.id)
                    }}
                >Delete</button>
            </div>
        </li>
    )
}

export default Project