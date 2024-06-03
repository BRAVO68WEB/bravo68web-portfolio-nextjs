import "../styles/globals.css";
// import CustomCursor from "components/providers/cursor";
import ErrorBoundary from "../components/errorBoundary";
import { Source_Code_Pro } from "next/font/google"

const sourceCodePro = Source_Code_Pro(
	{
		display: "swap",
		weights: [200, 300, 400, 500, 600, 700, 900],
		subsets: ["latin"],
	}
)

function MyPortfolio({ Component, pageProps }) {
	return (
		<>
			{/* <CustomCursor /> */}
			<ErrorBoundary>
				<main className={
					sourceCodePro.className
				}>
					<Component {...pageProps} />
				</main>
			</ErrorBoundary>
		</>
	);
}

export default MyPortfolio;
