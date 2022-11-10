import React from "react";
import Image from "next/image";
import s from "./BestSellers.module.css";
import boy3 from "./boys-3-1-300x300.jpg";

const getRanking = (ranking) => {
  return "★".repeat(ranking).padEnd(5, "☆");
};

const datos = [
  {
    img: boy3,
    nombre: "Line Sweater",
    ranking: 3,
    precio: "$46.00",
  },
];

const BestSeller = ({ prod }) => {
  return (
    <div className={s.producto}>
      <div className={s.producto_imagen}>
        <Image
          src={prod.img}
          width="80"
          alt="foto producto"
          priority
          className={s.producto_img}
        />
      </div>
      <div className={s.producto_datos}>
        <p>{prod.nombre}</p>
        <p className={s.ranking}>{getRanking(prod.ranking)}</p>
        <p>{prod.precio}</p>
      </div>
    </div>
  );
};

export default function index() {
  return (
    <div className={s.container}>
      <h3>CATEGORIES</h3>
      <div className={s.productos}>
        {datos?.map((prod) => {
          return <BestSeller prod={prod} key={prod.nombre} />;
        })}
      </div>
    </div>
  );
}
