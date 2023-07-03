import React from "react";
import SkillCard from "../skillCard";
import SkillCardStyle from "../skillCard.styled";

function OsuBestScoresSkillCard({
	title,
	image,
	bestScore1,
	bestScore2,
	bestScore3,
	bestScore4,
	bestScore5,
	url,
}) {
	return (
		<SkillCard title={title} image={image} url={url}>
			<div className="bestScores">
				<div className="bestScores__score">
					<div className="bestScores__score__image">
						<a href={bestScore1?.beatmap.url}>
							<img
								src={bestScore1?.beatmapset?.covers.cover}
								alt={bestScore1?.beatmapset?.title}
								width="120px"
							/>
						</a>
					</div>
					<div className="bestScores__score__info">
						<div className="bestScores__score__info__name">
							<div className="bestScores__score__info__name__title">
								{bestScore1?.beatmapset?.title}
							</div>
							<div className="bestScores__score__info__name__artist">
								{bestScore1?.beatmapset?.artist}
							</div>
						</div>
						<div className="bestScores__score__info__score">
							Star/Combos/PP
							<div className="bestScores__score__info__score__value">
								<div className="bestScores__score__info__name__artist">
									{bestScore1?.beatmap?.difficulty_rating +
										" "}
								</div>
								/
								<div className="bestScores__score__info__name__artist">
									{bestScore1?.max_combo}
								</div>
								/
								<div className="bestScores__score__info__name__artist">
									{Math.round(bestScore1?.pp)}
								</div>
							</div>
						</div>
					</div>
				</div>
				<br />
				<div className="bestScores__score">
					<div className="bestScores__score__image">
						<a href={bestScore2?.beatmap.url}>
							<img
								src={bestScore2?.beatmapset?.covers.cover}
								alt={bestScore2?.beatmapset?.title}
								width="120px"
							/>
						</a>
					</div>
					<div className="bestScores__score__info">
						<div className="bestScores__score__info__name">
							<div className="bestScores__score__info__name__title">
								{bestScore2?.beatmapset?.title}
							</div>
							<div className="bestScores__score__info__name__artist">
								{bestScore2?.beatmapset?.artist}
							</div>
						</div>
						<div className="bestScores__score__info__score">
							Star/Combos/PP
							<div className="bestScores__score__info__score__value">
								<div className="bestScores__score__info__name__artist">
									{bestScore2?.beatmap?.difficulty_rating +
										" "}
								</div>
								/
								<div className="bestScores__score__info__name__artist">
									{bestScore2?.max_combo}
								</div>
								/
								<div className="bestScores__score__info__name__artist">
									{Math.round(bestScore2?.pp)}
								</div>
							</div>
						</div>
					</div>
				</div>
				<br />
				<div className="bestScores__score">
					<div className="bestScores__score__image">
						<a href={bestScore3?.beatmap.url}>
							<img
								src={bestScore3?.beatmapset?.covers.cover}
								alt={bestScore3?.beatmapset?.title}
								width="120px"
							/>
						</a>
					</div>
					<div className="bestScores__score__info">
						<div className="bestScores__score__info__name">
							<div className="bestScores__score__info__name__title">
								{bestScore3?.beatmapset?.title}
							</div>
							<div className="bestScores__score__info__name__artist">
								{bestScore3?.beatmapset?.artist}
							</div>
						</div>
						<div className="bestScores__score__info__score">
							Star/Combos/PP
							<div className="bestScores__score__info__score__value">
								<div className="bestScores__score__info__name__artist">
									{bestScore3?.beatmap?.difficulty_rating +
										" "}
								</div>
								/
								<div className="bestScores__score__info__name__artist">
									{bestScore3?.max_combo}
								</div>
								/
								<div className="bestScores__score__info__name__artist">
									{Math.round(bestScore3?.pp)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</SkillCard>
	);
}

export default OsuBestScoresSkillCard;
