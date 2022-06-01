import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
 return(
    <nav className="button">
      <NavLink to="/Feelings">Feelings</NavLink>
      <NavLink to="/Share">Share</NavLink>
      <NavLink to="/">About</NavLink>
   </nav>
 )
}

export default NavBar;