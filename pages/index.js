import Head from "next/head";
import Nav from "components/nav";
import Main from "components/main";
import BMC from "components/buymeacoffee";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Jyotirmoy Bandyopadhayaya | Full Stack Web Developer and DevOps
          Engineer
        </title>
      </Head>
      <Nav />
      <Main />
      <BMC />
      {/* <Footer /> */}
    </div>
  );
}
