"use client";
import Image from "next/image";
import Head from "next/head";
import styles from "./page.module.scss";
import Nav from "../../components/Nav/Nav";
import BurgerMenu from "../../components/Nav/BurgerMenu";
import Hero from "../../components/Main/Hero";
import AboutMe from "../../components/Main/AboutMe";
import Why from "../../components/Main/Why";
import Logistik from "../../components/Main/Logistik";
import Contact from "../../components/Main/Contact";
import Sec from "../../components/Main/Sec";
import Capital from "../../components/Main/Capital";
import Log from "../../components/Main/Log";
import Nexte from "../../components/Main/nexte";
import Jerycho from "../../components/Main/Jerycho";
import Cart from "../../components/Main/Cart";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {" "}
      <Head>
        <meta property="og:image" />
        <meta name="description" content="Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <header>
          <Nav isOpen={isOpen} toggleMenu={toggleNav} />
          <BurgerMenu isOpen={isOpen} handleOpen={toggleNav} />
        </header>
        <Hero />
        <AboutMe />
        <Why />
        <Logistik />
        <Sec />
        <Capital />
        <Log />
        <Nexte />
        <Jerycho />
        <Cart />
        <Contact />
      </main>
    </>
  );
}
