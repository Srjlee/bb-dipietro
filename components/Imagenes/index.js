import React from "react";
import s from "./Img.module.css";

export default function Imagenes({ imagenes }) {
  return (
    <div className={s.container}>
      {imagenes?.map((i) => {
        return (
          <div
            className={s.img}
            style={{ backgroundImage: `url(${i.img})` }}
            key={i.id}
          ></div>
        );
      })}
    </div>
  );
}
