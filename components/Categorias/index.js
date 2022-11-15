import React from "react";
import s from "./Categorias.module.css";
import Link from "next/link";

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
        <Link href="/?categoria=for%20girls">
          <div className={s.categorias_datos}>
            <div className={s.categoria}>
              <p>For Girls</p>
            </div>

            <div className={s.canidad}>
              <p>(13)</p>
            </div>
          </div>
        </Link>
        <Link href="/?categoria=for home">
          <div className={s.categorias_datos}>
            <div className={s.categoria}>
              <p>For Home</p>
            </div>

            <div className={s.canidad}>
              <p>(13)</p>
            </div>
          </div>
        </Link>
        <Link href="/?categoria=for play">
          <div className={s.categorias_datos_ultima}>
            <div className={s.categoria}>
              <p>For Play</p>
            </div>

            <div className={s.canidad}>
              <p>(13)</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
