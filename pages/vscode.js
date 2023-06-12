import Head from "next/head";
import Nav from "components/nav";
import VSExts from "components/vsexts";
import Footer from "components/footer";

export default function Home() {
	return (
		<div>
			<Head>
				<title>
					VS Code Extensions | Jyotirmoy Bandyopadhayaya | Full Stack
					Web Developer and DevOps Engineer
				</title>
			</Head>
			<Nav />
			<VSExts />

			<Footer />
		</div>
	);
}
