import React from "react";
import NavStyle from "./nav.style";
import Link from "next/link";
const LINKS = [
  {
    title: "Skills",
    href: "/skills",
  },
];

function Nav() {
  return (
    <NavStyle>
      <Link href="/" className="title">
        <h1>echo &quot;Bravo&quot;</h1>
      </Link>
      <div className="links">
        {LINKS.map(({ title, href }, index) => (
          <div key={index} className="link">
            <Link href={href}>{title}</Link>
          </div>
        ))}
      </div>
    </NavStyle>
  );
}

export default Nav;
