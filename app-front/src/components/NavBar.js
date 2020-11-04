import React from 'react';
import { Link, link } from 'react-router-dom';

function NavBar () {
		return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h5>Taller Mecánico Autocity</h5>
            <span>Tareas Pendientes</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="fas fa-home" href="/"></i>
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">
                  <i className="fas fa-file" href="/create"></i>
                  Crear Tarea
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  <i className="fas fa-user" href="/users"></i>
                  Usuarios
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
export default NavBar