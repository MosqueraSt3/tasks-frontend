import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    // STATE LOG IN
    const [ user, setUser ] = useState({
        email: '',
        password: ''
    })

    // STATE ERROR
    // const [ error, setError ] = useState(false)

    // GET USER
    const { email, password } = user

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
        if (email.trim() === '' || password.trim() === '') return //setError(true)
        
        // SUCCESS
        // setError(false)


    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Log In</h1>
                <form
                    onSubmit={handleSubmit}
                >
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
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Log In"
                        />
                    </div>
                </form>
                <Link
                    to={'/new-account'}
                    className="enlace-cuenta"
                >Sign Up</Link>
            </div>
        </div>
    )
}

export default Login