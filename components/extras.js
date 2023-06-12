import { ExtraStyles } from "./extras.style";
import { extra, extraPages } from "config";

function extras() {
	return (
		<ExtraStyles>
			<div>
				<h1 className="title">Pages</h1>
				<div className="default">
					{extraPages.map((content, index) => {
						return (
							<div key={index}>
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
							</div>
						);
					})}
				</div>
			</div>
			<div>
				<h1 className="title">Components</h1>
				<div className="default">
					{extra.map((content, index) => {
						return (
							<div key={index}>
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
							</div>
						);
					})}
				</div>
			</div>
		</ExtraStyles>
	);
}

export default extras;
