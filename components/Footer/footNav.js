import React from "react";
import Image from "next/image";
import logo from "./logo_retina.png";
import s from "./footNav.module.css";

export default function Navbar() {
  return (
    <div>
      <nav className={s.navBar}>
        <div className={s.logo}>
          <Image src={logo} height="90" alt="logo" priority />
        </div>

        <ul className={s.bar}>
          <li>SHOP</li>
          <li>SALE</li>
          <li>GIRLS</li>
          <li>BOYS</li>
          <li>LOOKBOOK</li>
          <li>CONTACTS</li>
        </ul>
      </nav>
    </div>
  );
}
