import React from "react";
import s from "./div.module.css";

export default function divisor({ prod }) {
  console.log(prod);
  return (
    <div className={s.container}>
      <p className={s.titulo}>{prod.nombre}</p>
      <div className={s.detalle}>
        <p>Home</p>
        <p>%%%%{prod.categoria}</p>
        <p>&&{prod.nombre}</p>
      </div>
    </div>
  );
}
