import React, { useState, useContext } from 'react'

import projectContext from '../../context/Projects/projectContext'

const NewTask = () => {

    // GET FORM STATE 
    const projectsContext = useContext(projectContext)
    const { project } = projectsContext

    // 
    if (!project) return null

    const [ currentProject ] = project

    // STATE PROJECT
    // const [ task, setTask ] = useState({
    //     name: ''
    // })

    // // STATE ERROR
    // const [ error, setError ] = useState(false)

    // // GET PROJECT 
    // const { name } = task

    // // GET DATA FROM FORM
    // const handleChange = e => {
    //     setTask({
    //         ...task,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // SUBMIT
    // const handleSubmit = e => {
    //     e.preventDefault()

    //     // NOT EMPTY FIELDS
    //     if (name.trim() === '') return setError(true) 

    //     // SUCCESS
    //     setError(false)
    // }

    return (
        <div className="formulario">
            <form 
                // onSubmit={handleSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Task Name"
                        name="name"
                        // value={name}
                        // onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-block btn-submit"
                        value="Add Task"
                    />
                </div>
            </form>
        </div>
    )
}

export default NewTask