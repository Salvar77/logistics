import classes from "./Why.module.scss";
import Image from "next/image";
import Link from "next/link";
import photso from "../../assets/image/hero_640.jpg";

const Why = () => {
  return (
    <section id="why" className={classes.why}>
      <div className={classes.why__box}>
        <div className={classes.why__img}>
          <Image alt="foto" src={photso} />
        </div>
        <div className={classes.why__main}>
          <h2>siema</h2>
          <p>
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
          </p>
          <Link href="#" className={classes.why__link}>
            Zobacz
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Why;
