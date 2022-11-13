import React from "react";
import s from "./pDetail.module.css";
import Image from "next/image";
import { getRanking } from "../../public/datos";
import AddToCart from "./addToCart";
import AdditionalData from "./AdditionalData";

export default function index({ prod }) {
  return (
    <div className={s.container}>
      <div
        className={s.imagen}
        style={{ backgroundImage: `url(${prod.img[0]})` }}
      ></div>
      <div className={s.carrousel}>
        {prod.img.map((i) => {
          return (
            <div
              className={s.imagen_carro}
              style={{ backgroundImage: `url(${i})` }}
            ></div>
          );
        })}
      </div>
      <div className={s.detalle}>
        <p className={s.detPrecio}>${prod.precio}</p>
        <p className={s.detRanking}>{getRanking(prod.ranking)}</p>
        <p className={s.detTexto}>
          {" "}
          Fever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recen
        </p>
        <div className={s.addToCart}>
          <AddToCart />
          <div className={s.wishlist}>
            <p>Product added! </p>
            <p>Browse Wishlist</p>
          </div>
          <AdditionalData prod={prod} />
        </div>
      </div>
    </div>
  );
}
