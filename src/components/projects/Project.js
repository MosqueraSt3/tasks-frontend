import React, { useContext } from 'react'

import projectContext from '../../context/Projects/projectContext'

const Project = ({project}) => {

    // GET FORM STATE 
    const projectsContext = useContext(projectContext)
    const { detailProject } = projectsContext

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => detailProject(project.id)}
            >{project.name}</button>
        </li>

    )
}

export default Project