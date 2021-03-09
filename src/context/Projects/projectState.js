import { v4 as uuid } from 'uuid'
import React,{ useReducer } from 'react'

import projectContext from './projectContext'
import projectReducer from './projectReducer'

import { NEW_PROJECT,GET_PROJECTS,ADD_PROJECT,VALIDATE_FORM,CURRENT_PROJECT,DELETE_PROJECT } from '../../types'

const ProjectState = props => {
    
    const projects = [
        { id: 1, name: 'Tienda' },
        { id: 2, name: 'Intranet' },
        { id: 3, name: 'Diseño' }
    ]

    const initialState = {
        projects: [],
        newProject: false,
        errorform: false,
        project: null
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

    const addProject = project => {
        project.id = uuid()
        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }

    const showError = () => {
        dispatch({
            type: VALIDATE_FORM
        })
    }

    const detailProject = projectID => {
        dispatch({
            type: CURRENT_PROJECT,
            payload: projectID
        })
    }

    const deleteProject = projectID => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectID
        })
    }

    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                newProject: state.newProject,
                errorform: state.errorform,
                project: state.project,
                showForm,
                getProjects,
                addProject,
                showError,
                detailProject,
                deleteProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState