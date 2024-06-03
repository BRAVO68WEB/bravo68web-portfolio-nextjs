import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: [initialProps.styles, sheet.getStyleElement()],
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta
						name="description"
						content="Jyotirmoy Bandyopadhayaya's Website | A Student, Full Stack and DevOps Platform Developer | Jyotirmoy Bandyopadhayaya's Tech Stack"
					/>
					<meta
						name="keywords"
						content="bravo, bravo68web, Jyotirmoy, Bandyopadhayaya, dev, web, Full Stack Developer, DevOps, gcp, linux, server, api, rest, lpu"
					/>
					<meta name="language" content="EN" />
					<meta
						name="author"
						content="Jyotirmoy Bandyopadhayaya | Bravo68web"
					/>
					<meta
						name="publisher"
						content="Jyotirmoy Bandyopadhayaya | Bravo68web"
					/>
					<link rel="icon" href="/favicon.ico" />
					{/* <link
						rel="preconnect"
						href="https://fonts.googleapis.com"
					/>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
						rel="stylesheet"
					/> */}
					<meta property="twitter:card" content="summary_large_image" />
					<meta property="twitter:url" content="https://www.itsmebravo.dev/" />
					<meta property="twitter:title" content="Jyotirmoy Bandyopadhayaya | Full Stack Web Developer and DevOps Engineer" />
					<meta property="twitter:description" content="Jyotirmoy Bandyopadhayaya's Website | A Student, Full Stack and DevOps Platform Developer | Jyotirmoy Bandyopadhayaya's Tech Stack" />
					<meta property="twitter:image" content="https://itsmebravo.dev/images/banner.png" />
					
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://www.itsmebravo.dev/" />
					<meta property="og:title" content="Jyotirmoy Bandyopadhayaya | Full Stack Web Developer and DevOps Engineer" />
					<meta property="og:description" content="Jyotirmoy Bandyopadhayaya's Website | A Student, Full Stack and DevOps Platform Developer | Jyotirmoy Bandyopadhayaya's Tech Stack" />
					<meta property="og:image" content="https://itsmebravo.dev/images/banner.png" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
