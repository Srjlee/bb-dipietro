import React from "react";
import s from "./Img.module.css";
import Image from "next/image";

export default function index({ imagenes }) {
  return (
    <div className={s.container}>
      {imagenes.map((i) => {
        return (
          <Image
            key={i.id}
            src={i.img}
            width="200"
            className={s.img}
            alt="Imagen Footer"
          />
        );
      })}
    </div>
  );
}
