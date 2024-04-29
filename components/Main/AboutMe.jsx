import classes from "./AboutMe.module.scss";
import Image from "next/image";
import Link from "next/link";
import photo from "../../assets/image/kontenery_640.jpg";

const AboutMe = () => {
  return (
    <section id="home" className={classes.about}>
      <div className={classes.about__box}>
        <div className={classes.about__img}>
          <Image alt="foto" src={photo} />
        </div>
        <div className={classes.about__main}>
          <h1>Siema</h1>
          <p>
            siemsiemaisamasdaisdjaisdjalksdjalksdajsdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </p>

          <Link href="#" className={classes.about__link}>
            Zooobacz
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
