import { useContext } from "react";
import Image from "next/image";
import logo from "./logo-retina.png";
import s from "./Navbar.module.css";
import Link from "next/link";
import { cartContext } from "../../context/provider";

export default function Navbar() {
  const { cart, favoritos } = useContext(cartContext);

  return (
    <div>
      <nav className={s.navBar}>
        <Link href="/">
          <div className={s.logo}>
            <Image src={logo} height="90" alt="logo" priority />
          </div>
        </Link>

        <ul className={s.bar}>
          <Link href="/">
            <li>HOME</li>
          </Link>
          <li>SHOP FEATURES</li>
          <li>CLOTHES</li>
          <li>PAGES</li>
          <li>SHORTCODES</li>
          <li>POST TYPES</li>
          <li className={s.iconos}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#486683"
              fill={favoritos.length == 0 ? "none" : "currentcolor"}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#486683"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="6" cy="19" r="2" />
              <circle cx="17" cy="19" r="2" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
            </svg>
            {cart.length > 0 && (
              <div className={s.itemsCart}>{cart.length}</div>
            )}
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#486683"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
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
