import React, { useEffect } from "react";
import { BMCStyle } from "./buymeacoffee.style";

export default function Buymeacoffee() {
  // const
  useEffect(() => {
    const script = document.createElement("script");
    const div = document.getElementById("supportByBMC");
    script.setAttribute(
      "src",
      "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
    );
    script.setAttribute("data-name", "BMC-Widget");
    script.setAttribute("data-cfasync", "false");
    script.setAttribute("data-id", "bravo68web");
    script.setAttribute("data-description", "Support me on Buy me a coffee!");
    script.setAttribute(
      "data-message",
      "Buying a single coffee for me is 1000 times worth than a Thankyou "
    );
    script.setAttribute("data-color", "#7422f8");
    script.setAttribute("data-position", "Right");
    script.setAttribute("data-x_margin", "18");
    script.setAttribute("data-y_margin", "18");

    script.onload = function () {
      let evt = document.createEvent("Event");
      evt.initEvent("DOMContentLoaded", false, false);
      window.dispatchEvent(evt);
    };

    div.appendChild(script);
  }, []);

  return (
    <BMCStyle>
      <div id="supportByBMC"></div>
    </BMCStyle>
  );
}
