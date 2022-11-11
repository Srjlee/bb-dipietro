import React from "react";
//import Image from "next/image";
import s from "./SearchBar.module.css";
//import buscar from "../../public/img/buscar.png";

export default function index() {
  return (
    <div className={s.container}>
      <input
        type="text"
        className={s.search}
        placeholder="Search products..."
      />
      <div className={s.contenedor_img}>
        <div className={s.imagen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        </div>
      </div>
    </div>
  );
}
