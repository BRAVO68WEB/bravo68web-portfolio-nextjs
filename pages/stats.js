import Head from "next/head";
import Nav from "components/nav";
import Skills from "components/skills";
import Footer from "components/footer";

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

// export const getServerSideProps = async () => {

//   throw new Error("Internal server error")

//   return {
//     props:[]
//   }
// }
