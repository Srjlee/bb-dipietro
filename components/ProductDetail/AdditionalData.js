import React from "react";
import s from "./additionalData.module.css";

export default function additionalData({ prod }) {
  return (
    <div className={s.container}>
      <div className={s.datos}>
        <p className={s.titulo}>SKU:</p>
        <p className={s.dato}>{prod.sku}</p>
      </div>
      <div className={s.datos}>
        <p className={s.titulo}>Category:</p>
        <p className={s.dato}>{prod.categoria}</p>
      </div>
      <div className={s.datos}>
        <p className={s.titulo}>Tags:</p>
        <p className={s.dato}>{prod.tags?.join(", ")}</p>
      </div>
    </div>
  );
}
