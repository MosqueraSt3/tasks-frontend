import React, { useContext, useEffect } from 'react'

import Project from './Project'

import projectContext from '../../context/Projects/projectContext'

const ListProjects = () => {

    // GET FORM STATE 
    const projectsContext = useContext(projectContext)
    const { projects,getProjects } = projectsContext

    // 
    useEffect(() => {
        getProjects()
    }, [])
    
    // PROJECTS EQUAL TO EMPTY
    if (projects.length === 0) return null
    
    return (
        <ul className="listado-proyectos">
            {projects.map(p => (
                <Project 
                    key={p.id}
                    project={p}
                />
            ))}
        </ul>
    )
}

export default ListProjects