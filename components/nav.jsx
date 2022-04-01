import React from "react";
import NavStyle from "./nav.style";
import Link from "next/link";
import { useLanyard } from "react-use-lanyard";

const LINKS = [
  {
    title: "Skills",
    href: "/skills",
  },
  {
    title: "Resume",
    href: "/resume",
  },
  {
    title: "Mail Me",
    href: "mailto:me@bravo68web.me",
  },
];

function Nav() {
  const { loading, status /*, websocket */ } = useLanyard({
    userId: "457039372009865226",
    socket: true,
  });
  return (
    <NavStyle>
      <Link href="/">
        <div className="title">
          <h1>echo &quot;Bravo&quot;</h1>
          <div className="indicator">
            <div
              className={`circle ${
                !loading &&
                (status?.discord_status === "online" ||
                  status?.discord_status === "idle" ||
                  status?.discord_status === "dnd")
                  ? "green"
                  : "red"
              }`}
            ></div>
          </div>
        </div>
      </Link>

      <div className="links">
        {LINKS.map(({ title, href }, index) => (
          <div key={index} className="link">
            <Link href={href}>{title}</Link> |
          </div>
        ))}
      </div>
    </NavStyle>
  );
}

export default Nav;
