import React from 'react'
import { NavLink } from 'react-router-dom'

function Navabar() {
  return (
    <header>
        <nav>
            <NavLink to={"/profile"}>Profile</NavLink>
            <NavLink to={"/signup"}>Signup</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
        </nav>
    </header>
  )
}

export default Navabar