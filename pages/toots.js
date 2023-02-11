import Head from "next/head";
import Nav from "components/nav";
import Toots from "components/toots";
import Footer from "components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Toots | Jyotirmoy Bandyopadhayaya | Full Stack Web Developer and
          DevOps Engineer
        </title>
      </Head>
      <Nav />
      <Toots />

      <Footer />
    </div>
  );
}
