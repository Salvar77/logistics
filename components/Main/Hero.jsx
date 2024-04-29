import classes from "./Hero.module.scss";
// import foto from "../../assets/image/hero1_640.jpg";
import Image from "next/image";
import Link from "next/link";
import heroImageMobile from "../../assets/image/hero1_640.jpg";
import heroImageDesktop from "../../assets/image/hero2_1920.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(heroImageMobile);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 992px)");

    const handleMediaQueryChange = (e) => {
      setCurrentImage(e.matches ? heroImageDesktop : heroImageMobile);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section id="hero" className={classes.hero}>
      <div className={classes.hero__box}>
        <div className={classes.hero__img}>
          <Image src={currentImage} alt="foto"></Image>
        </div>
        <div className={classes.hero__main}>
          <h1>Logistyka</h1>
          <p>Warto!</p>
          <Link href="#" className={classes.hero__mainLink}>
            Sprawdź
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
