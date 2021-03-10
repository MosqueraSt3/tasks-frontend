import React, { Fragment, useContext } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Task from './Task'

import projectContext from '../../context/Projects/projectContext'
import taskContext from '../../context/tasks/taskContext'

const ListTasks = () => {

    // GET FORM STATE 
    const projectsContext = useContext(projectContext)
    const { project, deleteProject } = projectsContext

    // TASK STATE
    const tasksContext = useContext(taskContext)
    const { tasksproject } = tasksContext

    // 
    if (!project) return <h2>Choose a project</h2>

    // 
    const [ currentProject ] = project

    return (
        <Fragment>
            <h2>Project: {currentProject.name}</h2>
            <ul className="listado-tareas">
                {tasksproject.length === 0
                    ? (<li className="tarea"><p>Empty</p></li>)
                    : 
                    <TransitionGroup>
                        {tasksproject.map(t => (
                            <CSSTransition
                                key={t.id}
                                timeout={200}
                                className="tarea"
                            >
                                <Task 
                                    task={t}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
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