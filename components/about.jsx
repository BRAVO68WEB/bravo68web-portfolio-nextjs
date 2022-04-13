import { name, LanguagesKnown, description1, description2 } from "config";
import { AboutStyle } from "./about.style";

function about() {
  // console.log(LanguagesKnown);
  return (
    <AboutStyle>
      <div className="default">
        <div className="content">
          <p>{description1}</p>
        </div>
        <div className="lang-map">
          {LanguagesKnown.map((lang) => {
            return (
              <div className="lang-map-element" key={lang}>
                {lang}
              </div>
            );
          })}
        </div>
        <div className="content-2">
          <p>{description2}</p>
        </div>
      </div>
    </AboutStyle>
  );
}

export default about;
