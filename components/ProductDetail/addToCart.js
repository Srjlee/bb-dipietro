import React from "react";
//import Image from "next/image";
import s from "./addToCart.module.css";
//import buscar from "../../public/img/buscar.png";

export default function index() {
  return (
    <div className={s.container}>
      <input type="number" className={s.cantidad} placeholder="1" />
      <div className={s.container_text}>
        <div className={s.texto}>
          <p>ADD TO CART</p>
        </div>
      </div>
    </div>
  );
}
