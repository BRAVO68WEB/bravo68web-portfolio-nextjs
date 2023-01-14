import Head from "next/head";
import Nav from "components/nav";
import { useEffect, useRef } from "react";
import Resume from "components/resume";
import Footer from "components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Resume | Jyotirmoy Bandyopadhayaya | Full Stack Web Developer and
          DevOps Engineer
        </title>
      </Head>
      <Nav />
      <Resume />
      {/* <Footer /> */}
    </div>
  );
}
