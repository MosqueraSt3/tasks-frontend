import React, { useState, useContext, useEffect } from 'react'

import projectContext from '../../context/Projects/projectContext'
import taskContext from '../../context/tasks/taskContext'

const NewTask = () => {

    // GET FORM STATE 
    const projectsContext = useContext(projectContext)
    const { project } = projectsContext

    // TASK CONTEXT
    const tasksContext = useContext(taskContext)
    const { addTask,showError,errortask,getTasksById,currenttask,updateTask,deleteCurrentTask } = tasksContext

    // 
    useEffect(() => {
        if(currenttask !== null){
            setTask(currenttask)
        } else {
            setTask({
                name: ''
            })
        }
    }, [currenttask])

    // STATE PROJECT
    const [ task, setTask ] = useState({
        name: ''
    })

    // GET PROJECT 
    const { name } = task
    
    // 
    if (!project) return null

    const [ currentProject ] = project

    // // GET DATA FROM FORM
    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    // SUBMIT
    const handleSubmit = e => {
        e.preventDefault()

        // // NOT EMPTY FIELDS
        if (name.trim() === '') return showError(true) 

        if(currenttask === null){
            // 
            task.projectId = currentProject.id
            task.status = false
            addTask(task)  
        } else {
            // UPDATE
            updateTask(task)

            // DELETE 
            deleteCurrentTask()
        }

        // GET TASKS BY PROJECT
        getTasksById(currentProject.id)

        // RESTART FORM
        setTask({
            name: ''
        })
    }

    return (
        <div className="formulario">
            <form 
                onSubmit={handleSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Task Name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-block btn-submit"
                        value={currenttask ? 'Edit Task' : 'Add Task'}
                    />
                </div>
            </form>
            {errortask ? <p className="mensaje error">Name Task is Required</p> : null}
        </div>
    )
}

export default NewTask