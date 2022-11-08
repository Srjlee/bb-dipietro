import React from "react";
import Image from "next/image";
import logo from "../public/img/logo-retina.png";
import s from "../styles/Main.module.css";

export default function Home() {
  return (
    <div>
      <div className={s.banner}>
        20% off all kidswear + free shipping when you spend $ 60 or more
      </div>
      <nav className={s.navBar}>
        <div className={s.logo}>
          <Image src={logo} height="200" />
        </div>

        <ul className={s.bar}>
          <li>HOME</li>
          <li>SHOP FEATURES</li>
          <li>CLOTHES</li>
          <li>PAGES</li>
          <li>SHORTCODES</li>
          <li>POST TYPES</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
}
