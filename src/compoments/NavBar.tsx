import React from 'react'
import {NavLink} from 'react-router-dom'

export const NavBar: React.FC = () => {
    return (
        <>
           <nav className="nav-extended #9575cd deep-purple lighten-2 px1">
    <div className="nav-wrapper">
      <NavLink to="/" className="brand-logo">Todo App</NavLink>
    </div>
    <div className="nav-content">
      <ul className="tabs tabs-transparent">
        <li className="tab"><NavLink to="/">Home</NavLink></li>
        <li className="tab"><NavLink className="active" to="#test2">Trash</NavLink></li>
        <li className="tab"><NavLink to="/about">Info</NavLink></li>
      </ul>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">JavaScript</a></li>
  </ul>
        </>

    )
}


