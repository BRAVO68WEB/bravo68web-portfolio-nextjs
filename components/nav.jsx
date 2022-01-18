import React from "react";
import NavStyle from "./nav.style";
const LINKS = [
	{
		title: "Skills",
		href: "/skills",
	},
];

function Nav() {
	return (
		<NavStyle>
			<a href="/" className="title">
				<h1>echo "Bravo"</h1>
			</a>
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
