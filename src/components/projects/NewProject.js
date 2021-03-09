import React, { Fragment, useState, useContext } from 'react'

import projectContext from '../../context/Projects/projectContext'

const NewProject = () => {

    // GET FORM STATE 
    const projectsContext = useContext(projectContext)
    const { newProject, errorform, showForm, addProject, showError } = projectsContext

    // PROJECT STATE 
    const [ project, setProject ] = useState({
        name: ''
    })

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
        if (name === '') return showError() 

        // ADD TO STATE
        addProject(project)

        // RESTART FORM
        setProject({
            name: ''
        })
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
            { errorform ? <p className="mensaje error">Project Name is Required</p> : null}
        </Fragment>
    )
}

export default NewProject