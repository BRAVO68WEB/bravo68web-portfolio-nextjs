import Head from "next/head";
import Nav from "components/nav";
import Art from "components/art";

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
      <Art />
      {/* <Footer /> */}
    </div>
  );
}
