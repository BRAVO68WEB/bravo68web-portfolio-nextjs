import { format, parse } from "date-format-parse";
import ArtCardStyle from "./tootCard.style";
import { compile } from "html-to-text";

function SkillCard({ content, created_at, url, image }) {
  const contents = [content];
  const options = {
    wordwrap: 10,
    limits: {
      ellipsis: " ...",
      maxInputLength: "200",
    },
    longWordSplit: {
      forceWrapOnLimit: true,
      wrapCharacters: ["-", "/"],
    },
  };
  const compiledConvert = compile(options);
  const texts = contents.map(compiledConvert);
  return (
    <div>
      {content && (
        <div>
          <a href={url}>
            <ArtCardStyle>
              <div className="card">
                {image && (
                  <div className="card-logo">
                    <img src={image} height="30" />
                  </div>
                )}
                <div className="content">&quot;{texts.join("\n")}&quot;</div>
                <div className="type">
                  # {format(created_at, "DD MMM YYYY")}
                </div>
              </div>
            </ArtCardStyle>
          </a>
        </div>
      )}
    </div>
  );
}

export default SkillCard;
