import classes from "./Capital.module.scss";
import Image from "next/image";
import Link from "next/link";
import fotens from "../../assets/image/kontenery_640.jpg";

const Capital = () => {
  return (
    <section id="capital" className={classes.capital}>
      <div className={classes.capital__box}>
        <div className={classes.capital__image}>
          <Image alt="fotka" src={fotens} />
        </div>
        <div className={classes.capital__main}>
          <h3>siema</h3>
          <p>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like). Where does it come from? Contrary to
            popular belief, Lorem Ipsum is not simply random text. It has roots
            in a piece of classical Latin literature from 45 BC, making it over
            2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered
          </p>
          <Link href="#" className={classes.capital__link}>
            !
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Capital;
