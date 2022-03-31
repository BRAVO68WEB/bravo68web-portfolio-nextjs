import React, { useEffect, useState, useRef } from "react";
import { ResumeStyle } from "./resume.style";

function Resume() {
  const viewer = useRef(null);

  useEffect(() => {
    import("@pdftron/webviewer").then(() => {
      WebViewer(
        {
          path: ".",
          mobileRedirect: true,
          initialDoc:
            "https://raw.githubusercontent.com/BRAVO68WEB/certificates/master/Jyotirmoy's%20Resume.pdf",
        },
        viewer.current
      ).then((instance) => {
        const { docViewer } = instance;
        // you can now call WebViewer APIs here...
      });
    });
  }, []);
  return (
    <ResumeStyle>
      <div className="webviewer" ref={viewer} style={{ height: "100vh" }}></div>
    </ResumeStyle>
  );
}

export default Resume;
