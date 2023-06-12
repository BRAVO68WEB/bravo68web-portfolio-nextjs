import Head from "next/head";
import Nav from "components/nav";
import Extras from "components/extras";
import Footer from "components/footer";

export default function Home() {
	return (
		<div>
			<Head>
				<title>
					Extras | Jyotirmoy Bandyopadhayaya | Full Stack Web
					Developer and DevOps Engineer
				</title>
			</Head>
			<Nav />
			<Extras />

			<Footer />
		</div>
	);
}
