import React, { useEffect, useState, useRef } from "react";
import { ResumeStyle } from "./resume.style";

function Resume() {
	const viewer = useRef(null);

	useEffect(() => {
		import("@pdftron/webviewer").then(() => {
			WebViewer(
				{
					path: "webviewer/lib",
					mobileRedirect: true,
					initialDoc: "/resume.pdf",
				},
				viewer.current
			)
		});
	}, []);
	return (
		<ResumeStyle>
			<div
				className="webviewer"
				ref={viewer}
				style={{ height: "100vh" }}
			></div>
		</ResumeStyle>
	);
}

export default Resume;
