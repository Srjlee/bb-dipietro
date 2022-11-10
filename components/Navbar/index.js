import React from "react";
import Image from "next/image";
import fav from "../../public/img/favorito.png";
import cart from "../../public/img/cart.png";
import logo from "../../public/img/logo-retina.png";
import search from "../../public/img/buscar.png";
import s from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <nav className={s.navBar}>
        <div className={s.logo}>
          <Image src={logo} height="90" alt="logo" priority />
        </div>

        <ul className={s.bar}>
          <li>HOME</li>
          <li>SHOP FEATURES</li>
          <li>CLOTHES</li>
          <li>PAGES</li>
          <li>SHORTCODES</li>
          <li>POST TYPES</li>
          <li className={s.iconos}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#486683" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#486683" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="6" cy="19" r="2" />
              <circle cx="17" cy="19" r="2" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#486683" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </li>
        </ul>
      </nav>
    </div>
  );
}
