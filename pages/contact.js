import Head from "next/head";
import Nav from "components/nav";
import Contact from "components/contact";
import Footer from "components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Contact | Jyotirmoy Bandyopadhayaya | Full Stack Web Developer and
          DevOps Engineer
        </title>
      </Head>
      <Nav />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}
