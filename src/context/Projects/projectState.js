import React,{ useReducer } from 'react'

import projectContext from './projectContext'
import projectReducer from './projectReducer'

import { NEW_PROJECT,GET_PROJECTS } from '../../types'

const ProjectState = props => {
    
    const projects = [
        { id: 1, name: 'Tienda' },
        { id: 2, name: 'Intranet' },
        { id: 3, name: 'Diseño' }
    ]

    const initialState = {
        projects: [],
        newProject: false
    }

    // EXECUTE ACTIONS
    const [ state, dispatch ] = useReducer(projectReducer, initialState)

    // FUNC
    const showForm = () => {
        dispatch({
            type: NEW_PROJECT
        })
    }

    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }

    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                newProject: state.newProject,
                showForm,
                getProjects
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState