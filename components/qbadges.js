import { QBStyles } from "./qbadges.style";
import { qwiklabs as qb } from "config";

function qbadges() {
  return (
    <QBStyles>
      <div>
        <h1 className="title">Qwiklab Badges</h1>
        <div className="default">
          {qb.map((badge, index) => {
            return (
              <>
                <div>
                  <div className="content">
                    <div className="content-description">
                      <img src={badge.image} />
                    </div>
                    <div className="content-title">
                      <h1>
                        <a
                          href={badge.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {badge.title}
                        </a>
                      </h1>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </QBStyles>
  );
}

export default qbadges;
