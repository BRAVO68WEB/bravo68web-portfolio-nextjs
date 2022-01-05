import React from "react";
import FooterStyle from "./footer.style";
import { name } from "config";

function footer() {
  return <FooterStyle>Build By {name}</FooterStyle>;
}

export default footer;
