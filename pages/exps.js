import Head from "next/head";
import Nav from "components/nav";
import About from "components/experinces";
import Footer from "components/footer";

export default function Home() {
	return (
		<div>
			<Head>
				<title>
					About | Jyotirmoy Bandyopadhayaya | Full Stack Web Developer
					and DevOps Engineer
				</title>
			</Head>
			<Nav />
			<About />

			{/* <Footer /> */}
		</div>
	);
}
