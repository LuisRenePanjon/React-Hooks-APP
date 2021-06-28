import React from 'react';
import {Link} from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">useContext</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link exact activeClassName="active" className="nav-link nav-item" aria-current="page" to="/">Home</Link>
                <Link exact activeClassName="active" className="nav-link nav-item" to="/about">About</Link>
                <Link exact activeClassName="active" className="nav-link nav-item" to="/login">Login</Link>
              </div>
            </div>
          </div>
        </nav>
    )
}
