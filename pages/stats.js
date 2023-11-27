import Head from "next/head";
import Nav from "components/nav";
// import Skills from "components/skills";
import Footer from "components/footer";
import dynamic from "next/dynamic";

const Skills = dynamic(() => import("components/skills"), {
	ssr: false, // Disable server-side rendering
});

export default function Home() {
	return (
		<div>
			<Head>
				<title>
					Stats | Jyotirmoy Bandyopadhayaya | Full Stack Web Developer
					and DevOps Engineer
				</title>
			</Head>
			<Nav />
			<Skills />
			<Footer />
		</div>
	);
}
