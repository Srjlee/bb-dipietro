import React from "react";
import s from "./Producto.module.css";
import Image from "next/image";

export default function index({ prod }) {
  return (
    <div className={s.container}>
      <div className={s.imagen}>
        <Image src={prod.img} width="250" alt="Imagen del producto" />
      </div>
      <div className={s.datos}>
        <p className={s.categoria}>{prod.categoria}</p>
        <p className={s.nombre}>{prod.nombre}</p>
        <p className={s.precio}>{prod.precio}</p>
      </div>
    </div>
  );
}
