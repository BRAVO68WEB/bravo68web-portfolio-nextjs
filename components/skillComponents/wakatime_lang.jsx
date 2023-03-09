import React from "react";
import SkillCard from "../skillCard";
import SkillCardStyle from "../skillCard.styled";
import { format, parse } from "date-format-parse";

function WakatimeTopLangSkillCard({
  title,
  image,
  topLang1,
  topLang2,
  topLang3,
  topLang4,
  topLang5,
  url,
}) {
  return (
    <SkillCard title={title} image={image} url={url}>
      <div className="description">
        {topLang1?.name} :- {topLang1?.percent}%
      </div>
      <div className="description">
        {topLang2?.name} :- {topLang2?.percent}%
      </div>
      <div className="description">
        {topLang3?.name} :- {topLang3?.percent}%
      </div>
      <div className="description">
        {topLang4?.name} :- {topLang4?.percent}%
      </div>
      <div className="description">
        {topLang5?.name} :- {topLang5?.percent}%
      </div>
    </SkillCard>
  );
}

export default WakatimeTopLangSkillCard;
