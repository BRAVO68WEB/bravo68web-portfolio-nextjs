import React from "react";
import ArtCardStyle from "./artCard.style";
import ArtModel from "./artModal";

function SkillCard({ name, description, image, onClick }) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      {image && (
        <div>
          <ArtCardStyle>
            <div className="card" onClick={handleClickOpen}>
              <div className="card-logo">
                <img src={image} height="140px" />
              </div>

              <div className="date">
                <b>{name}</b>
              </div>
              <div className="content">{description}</div>
            </div>
          </ArtCardStyle>
          <ArtModel open={open} onClose={handleClose}>
            <img src={image} alt="preview" />
          </ArtModel>
        </div>
      )}
    </div>
  );
}

export default SkillCard;
