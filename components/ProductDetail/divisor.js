import React from "react";
import s from "./div.module.css";
import Link from "next/link";

export default function Divisor({ prod }) {
  return (
    <div className={s.container}>
      <p className={s.titulo}>{prod.nombre}</p>
      <div className={s.detalle}>
        <p>
          <Link href="/">Home :</Link>
        </p>
        <p>{prod.categoria} : </p>
        <p>{prod.nombre}</p>
      </div>
    </div>
  );
}
