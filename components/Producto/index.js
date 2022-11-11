import React from "react";
import s from "./Producto.module.css";
import Image from "next/image";

export default function index({ prod, imagen }) {
  return (
    <div className={s.container}>
      <div className={s.imagen} style={{ backgroundImage: `url(${imagen})` }}>
        {/* <Image src={prod.img} width="270" alt="Imagen del producto" priority /> */}
        <div className={s.addToCart} id={s.addToCart}>
          <ul className={s.addToCart_datos}>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentcolor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
            </li>
            <li>add to cart</li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentcolor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </li>
          </ul>
        </div>
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
