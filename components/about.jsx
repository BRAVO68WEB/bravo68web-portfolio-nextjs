import { LanguagesKnownCategory, description1, description2 } from "config";
import { AboutStyle } from "./about.style";
import Image from "next/image";

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
				<div className="content">
					<p>{description2}</p>
				</div>
				<div className="content-2">
					<Image
						src="/images/header-banner.png"
						alt="cool lang and framework banner"
						width="1200"
						height="270"
						quality="100"
						className="banner-image-img"
					/>
				</div>
			</div>
		</AboutStyle>
	);
}

export default about;
