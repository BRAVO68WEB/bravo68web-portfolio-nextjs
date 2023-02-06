import { ExtraStyles } from "./vsexts.style";
import { vsExts } from "config";

function vsExtsShow() {
  return (
    <ExtraStyles>
      <div>
        <h1 className="title">VS Code Extensions</h1>
        <div className="default">
          {vsExts.map((content, index) => {
            return (
              <div key={index}>
                <div className="content">
                  <div className="content-description">
                    <a
                      href={content.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={content.image} />
                    </a>
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
                    <h2 className="tags">#{content.type}</h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ExtraStyles>
  );
}

export default vsExtsShow;
