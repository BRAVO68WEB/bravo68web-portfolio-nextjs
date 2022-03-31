import React, { useEffect, useState } from "react";
import { ResumeStyle } from "./resume.style";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

function Resume() {
  const [resume, setResume] = useState({});
  useEffect(() => {
    // axios.get("").then((res) => {
    //   setResume(res.data);
    // });
  }, []);
  //   console.log(Document);
  return (
    <ResumeStyle>
      <div className="resume">
        <Document file="https://raw.githubusercontent.com/BRAVO68WEB/certificates/master/Jyotirmoy's%20Resume.pdf">
          <Page pageNumber={0} />
        </Document>
      </div>
    </ResumeStyle>
  );
}

export default Resume;
