import React from "react";

function NavBar() {
  const links = ["about", "container", "Share"];
  const navLinks = links.map((link) => {
  return ( <a href={"#" + link} key={link}>{link}</a>)})
  return <nav>
    {navLinks}
  </nav>;
}

export default NavBar;