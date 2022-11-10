import React from "react";
import Image from "next/image";
import s from "./SearchBar.module.css";
import buscar from "../../public/img/buscar.png";

export default function index() {
  return (
    <div className={s.container}>
      <input
        type="text"
        className={s.search}
        placeholder="Search products..."
      />
      <div className={s.contenedor_img}>
        <Image src={buscar} height="25" className={s.imagen} alt="Lupa" />
      </div>
    </div>
  );
}
