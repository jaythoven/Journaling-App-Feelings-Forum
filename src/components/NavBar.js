import React from "react";

function NavBar() {
  const links = ["About", "Feelings", "Share"];
  const navLinks = links.map((link) => {
  return ( <a href={"#" + link} key={link} className="button">{link}</a>)})
  return <nav className="NavBar">
    {navLinks}
  </nav>;
}

export default NavBar;