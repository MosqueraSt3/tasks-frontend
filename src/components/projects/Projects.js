import React from 'react'

import Sidebar from '../layout/Sidebar'
import Navbar from '../layout/Navbar'

import NewTask from '../tasks/NewTask'
import ListTask from '../tasks/ListTasks'

const Projects = () => {
    return (
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Navbar />
                <main>
                    <NewTask />
                    <div className="contenedor-tareas">
                        <ListTask />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Projects