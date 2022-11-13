import React from "react";
import s from "./addInfo.module.css";

export default function AddInfo({ prod }) {
  return (
    <div className={s.container}>
      <div className={s.datos}>
        <p className={s.titulo}>Color:</p>
        <p className={s.dato}>{prod.color}</p>
      </div>
      <div className={s.datos}>
        <p className={s.titulo}>Material:</p>
        <p className={s.dato}>{prod.material}</p>
      </div>
      <div className={s.datos}>
        <p className={s.titulo}>Age:</p>
        <p className={s.dato}>{prod.age}</p>
      </div>
    </div>
  );
}
