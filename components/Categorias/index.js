import React from "react";
import s from "./Categorias.module.css";
import Link from "next/link";

export default function index({ qCat }) {
  return (
    <div className={s.container}>
      <h3>CATEGORIES</h3>
      <div className={s.categorias}>
        <Link href="/?categoria=for babies#productos">
          <div className={s.categorias_datos}>
            <div className={s.categoria}>
              <p>For Babies</p>
            </div>

            <div className={s.canidad}>
              <p>({qCat["for babies"] ? qCat["for babies"] : 0})</p>
            </div>
          </div>
        </Link>
        <Link href="/?categoria=for boys#productos">
          <div className={s.categorias_datos}>
            <div className={s.categoria}>
              <p>For Boys</p>
            </div>

            <div className={s.canidad}>
              <p>({qCat["for boys"]})</p>
            </div>
          </div>
        </Link>
        <Link href="/?categoria=for%20girls#productos">
          <div className={s.categorias_datos}>
            <div className={s.categoria}>
              <p>For Girls</p>
            </div>

            <div className={s.canidad}>
              <p>({qCat["for girls"]})</p>
            </div>
          </div>
        </Link>
        <Link href="/?categoria=for home#productos">
          <div className={s.categorias_datos}>
            <div className={s.categoria}>
              <p>For Home</p>
            </div>

            <div className={s.canidad}>
              <p>({qCat["for home"]})</p>
            </div>
          </div>
        </Link>
        <Link href="/?categoria=for play#productos">
          <div className={s.categorias_datos_ultima}>
            <div className={s.categoria}>
              <p>For Play</p>
            </div>

            <div className={s.canidad}>
              <p>({qCat["for play"]})</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
