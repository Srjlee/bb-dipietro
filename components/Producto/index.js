import React, { useEffect, useState } from "react";
import s from "./Producto.module.css";
import Image from "next/image";

const heart = (
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
);
const search = (
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
);

export default function index({ prod }) {
  // const [mouse, setmouse] = useState({
  //   MouseX: 0,
  //   MouseY: 0,
  // });

  // useEffect(() => {
  //   const mouse = document
  //     .getElementById(prod.id)
  //     .addEventListener("mousemove", (event) => {
  //       setmouse({
  //         MouseX: event.clientX,
  //         MouseY: event.clientY,
  //       });

  //       console.log(mouse);
  //     });
  // }, []);

  return (
    <div className={s.container}>
      <div
        className={s.imagen}
        id={prod.id}
        style={{ backgroundImage: `url(${prod.img[0]})` }}
      >
        {prod.stock == 0 ? (
          <>
            <div className={s.outStock}>out of stock</div>
            <div className={s.addToCart} id={s.addToCart}>
              <ul className={s.addToCart_datos}>
                <li>{heart}</li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div> </div>
            <div className={s.addToCart} id={s.addToCart}>
              <ul className={s.addToCart_datos}>
                <li>{heart}</li>
                <li>add to cart</li>
                <li>{search}</li>
              </ul>
            </div>
          </>
        )}
      </div>
      <div className={s.datos}>
        <div className={s.categoria}>
          <p>{prod.categoria}</p>
        </div>
        <div className={s.nombre}>
          <p>{prod.nombre}</p>
        </div>
        {prod.stock !== 0 ? (
          <div className={s.precio}>{<p>${prod.precio}</p>}</div>
        ) : (
          <div className={s.precio}>{<p></p>}</div>
        )}
      </div>

      {/* 
      {mouse.MouseX ? (
        <>
          <div
            style={{
              position: "absolute",
              positionX: window.pageX,
              width: "10rem",
              height: "10rem",

              backgroundImage: `url(${imagen}`,
              backgroundSize: "10rem",
              backgroundPositionX: `${mouse.MouseX}`,
              backgroundPositionY: `${mouse.MouseY}`,
            }}
          ></div>
        </>
      ) : null} */}
    </div>
  );
}
