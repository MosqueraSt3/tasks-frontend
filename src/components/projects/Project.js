import React, { useContext } from 'react'

import projectContext from '../../context/Projects/projectContext'
import taskContext from '../../context/tasks/taskContext'

const Project = ({project}) => {

    // GET FORM STATE 
    const projectsContext = useContext(projectContext)
    const { detailProject } = projectsContext

    // TASK CONTEXT
    const tasksContext = useContext(taskContext)
    const { getTasksById } = tasksContext

    const focusOnProject = id => {
        detailProject(id)
        getTasksById(id)
    }

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => focusOnProject(project.id)}
            >{project.name}</button>
        </li>

    )
}

export default Project