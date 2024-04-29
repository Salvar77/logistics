import classes from "./Nexte.module.scss";
import Image from "next/image";
import h from "../../assets/image/hero_640.jpg";

const Nexte = () => {
  return (
    <section id="log" className={classes.log}>
      <div className={classes.log__box}>
        <div className={classes.log__image}>
          <Image alt="fot" src={h} />
        </div>
        <div className={classes.log__main}>
          <h3>siema</h3>
          <p>siema</p>
        </div>
      </div>
    </section>
  );
};

export default Nexte;
