import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NewAccount = () => {

    // STATE LOG IN
    const [ user, setUser ] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    // STATE ERROR
    const [ error, setError ] = useState(false)

    // GET USER
    const { name, email, password, confirmPassword } = user

    // HANDLE CHANGE
    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    // HANDLE SUBMIT
    const handleSubmit = e => {
        e.preventDefault()

        // NOT EMPTY FIELDS
        if (email.trim() === '' || password.trim() === '') return setError(true)

        // MIN CHARACTERS

        // CONFIRM PASSWORD
        
        // SUCCESS
        setError(false)


    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Sign Up</h1>
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input 
                            type="password"
                            id="confirm"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Sign Up"
                        />
                    </div>
                </form>
                <Link
                    to={'/'}
                    className="enlace-cuenta"
                >Go Back</Link>
            </div>
        </div>
    )
}

export default NewAccount