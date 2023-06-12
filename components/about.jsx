import { LanguagesKnownCategory, description1, description2 } from "config";
import { AboutStyle } from "./about.style";

function about() {
	return (
		<AboutStyle>
			<div className="default">
				<div className="content">
					<p>{description1}</p>
				</div>
				<div className="lang-map">
					{LanguagesKnownCategory.map((lang) => {
						return (
							<div
								className="lang-map-element"
								key={lang}
								style={{
									backgroundColor: lang[Object.keys(lang)[0]],
								}}
							>
								#{Object.keys(lang)[0].toString()}
							</div>
						);
					})}
				</div>
				<div className="content-2">
					<p>{description2}</p>
					<img src="https://bravo68web.me/images/header_.png" />
				</div>
			</div>
		</AboutStyle>
	);
}

export default about;
