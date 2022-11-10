import React from "react";
import s from "./Categorias.module.css";

export default function index() {
  return (
    <div className={s.container}>
      <h3>CATEGORIES</h3>
      <div className={s.categorias}>
        <div className={s.categorias_datos}>
          <div className={s.categoria}>
            <p>For Babies</p>
          </div>

          <div className={s.canidad}>
            <p>(13)</p>
          </div>
        </div>
        <div className={s.categorias_datos}>
          <div className={s.categoria}>
            <p>For Boys</p>
          </div>

          <div className={s.canidad}>
            <p>(13)</p>
          </div>
        </div>
        <div className={s.categorias_datos}>
          <div className={s.categoria}>
            <p>For Girls</p>
          </div>

          <div className={s.canidad}>
            <p>(13)</p>
          </div>
        </div>
        <div className={s.categorias_datos}>
          <div className={s.categoria}>
            <p>For Home</p>
          </div>

          <div className={s.canidad}>
            <p>(13)</p>
          </div>
        </div>
        <div className={s.categorias_datos}>
          <div className={s.categoria}>
            <p>For Play</p>
          </div>

          <div className={s.canidad}>
            <p>(13)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
