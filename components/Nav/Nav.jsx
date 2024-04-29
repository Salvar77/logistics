"use client";
import { useEffect, useState } from "react";
import classes from "./Nav.module.scss";
import Link from "next/link";

const Nav = ({ isOpen, toggleMenu }) => {
  let navClasses = classes.nav;

  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  if (isOpen) {
    navClasses = `${classes.nav} ${classes.nav__show}`;
  }

  const handleToggleNav = () => {
    if (windowWidth < 992) {
      toggleMenu();
    }
  };

  return (
    <nav className={navClasses}>
      <div className={classes.nav__container}>
        <div className={classes.nav__items}>
          <ul aria-hidden className={classes.nav__item}>
            <li onClick={handleToggleNav}>
              <Link href="/#">Home</Link>
            </li>
            <li onClick={handleToggleNav}>
              <Link href="/#">O logistyce</Link>
            </li>
            <li onClick={handleToggleNav}>
              <Link href="/#">Dlaczego warto</Link>
            </li>
            <li onClick={handleToggleNav}>
              <Link href="/#">Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
