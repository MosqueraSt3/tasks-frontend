import React, { useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Project from './Project'

import projectContext from '../../context/Projects/projectContext'

const ListProjects = () => {

    // GET FORM STATE 
    const projectsContext = useContext(projectContext)
    const { projects,getProjects } = projectsContext

    // 
    useEffect(() => {
        getProjects()
        // eslint-disable-next-line
    }, [])
    
    // PROJECTS EQUAL TO EMPTY
    if (projects.length === 0) return null
    
    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
                {projects.map(p => (
                    <CSSTransition
                        key={p.id}
                        timeout={200}
                        className="proyecto"
                    >
                            <Project 
                                project={p}
                            />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    )
}

export default ListProjects