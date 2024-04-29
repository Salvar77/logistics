import classes from "./Sec.module.scss";
import Image from "next/image";
import Link from "next/link";
import fotka from "../../assets/image/construction_640.jpg";

const Sec = () => {
  return (
    <section id="section" className={classes.section}>
      <div className={classes.section__box}>
        <div className={classes.section__image}>
          <Image alt="fotka" src={fotka} />
        </div>
        <div className={classes.section__main}>
          <h3>siemasiema</h3>
          <p>
            siemasiemasiemasiemasiemasiemasiemasiemasiemasiemasiema
            siemasiemasema
          </p>
          <Link href="#" className={classes.section__link}></Link>
        </div>
      </div>
    </section>
  );
};

export default Sec;
