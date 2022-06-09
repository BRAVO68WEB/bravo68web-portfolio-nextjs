import { ExtraStyles } from "./extras.style";
import {qb} from "config"
function qbadges() {
  var qbData = Array.from(qb, ([title,earnDate,url,image]) => ({ title,earnDate,url,image }));
  console.log(qbData);
    return (
    <ExtraStyles>
      <div>
        <h1 className="title">Qwiklab Badges</h1>
        <div className="default">
              {/* <div>
                <div className="content">
                  <div className="content-description">
                    <img src={qb[1].image} />
                  </div>
                  <div className="content-title">
                    <h1>
                      <a
                        href={qb[1].url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {qb[1].title}
                      </a>
                    </h1>
                  </div>
                </div>
              </div> */}
        </div>
      </div>
    </ExtraStyles>
  );
}

export default qbadges;
