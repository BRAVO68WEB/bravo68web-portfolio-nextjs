import Head from "next/head";
import Nav from "components/nav";
import Qbadges from "components/qbadges";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Projects | Jyotirmoy Bandyopadhayaya | Full Stack Web Developer and
          DevOps Engineer
        </title>
      </Head>
      <Nav />
      <Qbadges />
      {/* <Footer /> */}
    </div>
  );
}
