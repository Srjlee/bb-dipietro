import React from "react";
import Image from "next/image";
import fav from "../../public/img/favorite.png";
import cart from "../../public/img/cart.png";
import logo from "../../public/img/logo-retina.png";
import search from "../../public/img/search.png";
import s from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <nav className={s.navBar}>
        <div className={s.logo}>
          <Image src={logo} height="90" alt="logo" />
        </div>

        <ul className={s.bar}>
          <li>HOME</li>
          <li>SHOP FEATURES</li>
          <li>CLOTHES</li>
          <li>PAGES</li>
          <li>SHORTCODES</li>
          <li>POST TYPES</li>
          <li>
            <Image src={fav} height="20" alt="icono favorito" />
          </li>
          <li>
            <Image src={cart} alt="icono carrito" height="20" />
          </li>
          <li>
            <Image src={search} alt="icono search" height="20" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
