import {} from "config";
import { ExtraStyles } from "./extras.style";
import { extra } from "config";

function extras() {
  return (
    <ExtraStyles>
      <h1>Extras</h1>
      <div className="default">
        {extra.map((content, index) => {
          return (
            <>
              <div className="content">
                <div className="content-description">
                  <img src={content.image} />
                </div>
                <div className="content-title">
                  <h1>
                    <a
                      href={content.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {content.name}
                    </a>
                  </h1>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </ExtraStyles>
  );
}

export default extras;
