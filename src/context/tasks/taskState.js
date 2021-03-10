import { v4 as uuid } from 'uuid'
import React,{ useReducer } from 'react'

import taskContext from './taskContext'
import taskReducer from './taskReducer'

import { TASKS_PROJECT,ADD_TASK,VALIDATE_TASK,DELETE_TASK,STATUS_TASK,CURRENT_TASK,EDIT_TASK,CLEAN_TASK } from '../../types'

const TaskState = props => {

    const initialState = {
        tasks: [
            { id: 1, name: 'Plataforma', status: true, projectId: 1},
            { id: 2, name: 'Colores', status: false, projectId: 1},
            { id: 3, name: 'Pasarela de Pago', status: true, projectId: 2}
        ],
        tasksproject: null,
        errortask: false,
        currenttask: null
    }

    // EXECUTE ACTIONS
    const [ state, dispatch ] = useReducer(taskReducer, initialState)

    // FUNC
    const getTasksById = projectId => {
        dispatch({
            type: TASKS_PROJECT,
            payload: projectId
        })
    }

    const addTask = task => {
        task.id = uuid()
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }
    
    const showError = () => {
        dispatch({
            type: VALIDATE_TASK
        })
    }
    
    const deleteTask = id => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }

    const changeStatusTask = task => {
        dispatch({
            type: STATUS_TASK,
            payload: task
        })
    }

    const focusOnCurrentTask = task => {
        dispatch({
            type: CURRENT_TASK,
            payload: task
        })
    }

    const updateTask = task => {
        dispatch({
            type: EDIT_TASK,
            payload: task
        })
    }

    const deleteCurrentTask = () => {
        dispatch({
            type: CLEAN_TASK
        })
    }

    return (
        <taskContext.Provider
            value={{
                tasks: state.tasks,
                tasksproject: state.tasksproject,
                errortask: state.errortask,
                currenttask: state.currenttask,
                getTasksById,
                addTask,
                showError,
                deleteTask,
                changeStatusTask,
                focusOnCurrentTask,
                updateTask,
                deleteCurrentTask
            }}
        >
            {props.children}
        </taskContext.Provider>
    )
}

export default TaskState