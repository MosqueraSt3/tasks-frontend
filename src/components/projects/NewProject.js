import React, { Fragment, useState, useContext } from 'react'

import projectContext from '../../context/Projects/projectContext'

const NewProject = () => {

    // GET FORM STATE 
    const projectsContext = useContext(projectContext)
    const { newProject, showForm } = projectsContext

    // PROJECT STATE 
    const [ project, setProject ] = useState({
        name: ''
    })

    // ERROR STATE 
    const [ error, setError ] = useState(false)

    // GET PROJECT 
    const { name } = project

    // GET DATA FROM FORM
    const handleChange = e => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    // SUBMIT
    const handleSubmit = e => {
        e.preventDefault()

        // NOT EMPTY FIELDS
        if (name.trim() === '') return setError(true) 

        // SUCCESS
        setError(false)
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => showForm()}
            >New Project</button>

            {   newProject 
                    ? 
                        (<form 
                            className="formulario-nuevo-proyecto"
                            onSubmit={handleSubmit}
                        >
                            <input 
                                type="text"
                                className="input-text"
                                placeholder="Project Name"
                                name="name"
                                value={name}
                                onChange={handleChange}
                            />
                            <input 
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="Add Project"
                            />
                        </form>)
                    : null
            }
        </Fragment>
    )
}

export default NewProject