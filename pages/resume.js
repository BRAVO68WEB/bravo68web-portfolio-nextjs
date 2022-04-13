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
        <meta
          name="description"
          content="Jyotirmoy Bandyopadhayaya's Website | A Student, Full Stack and DevOps Platform Developer | Jyotirmoy Bandyopadhayaya's Tech Stack"
        />
        <meta
          name="keywords"
          content="bravo, bravo68web, Jyotirmoy, Bandyopadhayaya, dev, web, Full Stack Developer, DevOps, gcp, linux, server, api, rest, lpu"
        />
        <meta name="language" content="EN" />
        <meta name="author" content="Jyotirmoy Bandyopadhayaya | Bravo68web" />
        <meta
          name="publisher"
          content="Jyotirmoy Bandyopadhayaya | Bravo68web"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <Resume />
      {/* <Footer /> */}
    </div>
  );
}
