import React from "react";
import s from "./Producto.module.css";
import Image from "next/image";

export default function index({ prod }) {
  return (
    <div className={s.container}>
      <div className={s.imagen}>
        <Image src={prod.img} width="270" alt="Imagen del producto" priority />
      </div>
      <div className={s.datos}>
        <div className={s.categoria}>
          <p>{prod.categoria}</p>
        </div>
        <div className={s.nombre}>
          <p>{prod.nombre}</p>
        </div>
        <div className={s.precio}>
          <p>{prod.precio}</p>
        </div>
      </div>
    </div>
  );
}
