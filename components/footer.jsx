import React from "react";
import FooterStyle from "./footer.style";
import { name } from "config";
import Status from "./status";

function footer() {
	return (
		<FooterStyle>
			<div className="main-footer">Build By {name}</div>
			{/* <div className="api-status">
      <Status />
    </div> */}
		</FooterStyle>
	);
}

export default footer;
