import React from 'react'

const Navbar = () => {
    return (
        <header className="app-header">
            <p className="nombre-usuario">Hola <span>Stiven</span></p>
            <nav className="nav-principal">
                <a href="#!">Log out</a>
            </nav>
        </header>
    )
}

export default Navbar