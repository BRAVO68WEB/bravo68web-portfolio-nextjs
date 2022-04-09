import React from "react";
import SkillCard from "../skillCard";
import SkillCardStyle from "../skillCard.styled";
// import { format, parse } from "date-format-parse";

function SpotifyTopSkillCard({
  title,
  image,
  topSongs1,
  topSongs2,
  topSongs3,
  topSongs4,
  topSongs5,
  url,
}) {
  return (
    <SkillCard title={title} image={image} url={url}>
      <div className="topSongs">
        <div className="topSongs__song">
          <div className="topSongs__song__image">
            <a href={topSongs1?.external_urls.spotify}>
              <img
                src={topSongs1?.album?.images[0]?.url}
                alt={topSongs1?.name}
                width="60px"
              />
            </a>
          </div>
          <div className="topSongs__song__info">
            <div className="topSongs__song__info__name">{topSongs1?.name}</div>
            <div className="topSongs__song__info__artist">
              {topSongs1?.artists[0]?.name}
            </div>
          </div>
        </div>
        <div className="topSongs__song">
          <div className="topSongs__song__image">
            <a href={topSongs2?.external_urls.spotify}>
              <img
                src={topSongs2?.album?.images[0]?.url}
                alt={topSongs2?.name}
                width="60px"
              />
            </a>
          </div>
          <div className="topSongs__song__info">
            <div className="topSongs__song__info__name">{topSongs2?.name}</div>
            <div className="topSongs__song__info__artist">
              {topSongs2?.artists[0]?.name}
            </div>
          </div>
        </div>
        <div className="topSongs__song">
          <div className="topSongs__song__image">
            <a href={topSongs3?.external_urls.spotify}>
              <img
                src={topSongs3?.album?.images[0]?.url}
                alt={topSongs3?.name}
                width="60px"
              />
            </a>
          </div>
          <div className="topSongs__song__info">
            <div className="topSongs__song__info__name">{topSongs3?.name}</div>
            <div className="topSongs__song__info__artist">
              {topSongs3?.artists[0]?.name}
            </div>
          </div>
        </div>
        <div className="topSongs__song">
          <div className="topSongs__song__image">
            <a href={topSongs4?.external_urls.spotify}>
              <img
                src={topSongs4?.album?.images[0]?.url}
                alt={topSongs4?.name}
                width="60px"
              />
            </a>
          </div>
          <div className="topSongs__song__info">
            <div className="topSongs__song__info__name">{topSongs4?.name}</div>
            <div className="topSongs__song__info__artist">
              {topSongs4?.artists[0]?.name}
            </div>
          </div>
        </div>
        <div className="topSongs__song">
          <div className="topSongs__song__image">
            <a href={topSongs5?.external_urls.spotify}>
              <img
                src={topSongs5?.album?.images[0]?.url}
                alt={topSongs5?.name}
                width="60px"
              />
            </a>
          </div>
          <div className="topSongs__song__info">
            <div className="topSongs__song__info__name">{topSongs5?.name}</div>
            <div className="topSongs__song__info__artist">
              {topSongs5?.artists[0]?.name}
            </div>
          </div>
        </div>
      </div>
    </SkillCard>
  );
}

export default SpotifyTopSkillCard;
