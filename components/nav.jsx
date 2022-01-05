import React from "react";
import NavStyle from "./nav.style";
const LINKS = [
  {
    title: "Skills",
    href: "#",
  },
];

function Nav() {
  return (
    <NavStyle>
      <div className="title">
        <h1>echo "Bravo"</h1>
      </div>
      <div className="links">
        {LINKS.map(({ title, href }, index) => (
          <div key={index} className="link">
            <a href={href}>{title}</a>
          </div>
        ))}
      </div>
    </NavStyle>
  );
}

export default Nav;
