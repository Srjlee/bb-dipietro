import React from "react";
import Link from "next/link";
import s from "./BestSellers.module.css";

const getRanking = (ranking) => {
  return "★".repeat(ranking).padEnd(5, "☆");
};

const BestSeller = ({ prod }) => {
  return (
    <Link href={`/producto/${prod.id}`}>
      <div className={s.producto}>
        <div
          className={s.producto_imagen}
          style={{ backgroundImage: `url(${prod.img})` }}
        ></div>
        <div className={s.producto_datos}>
          <p>{prod.nombre}</p>
          <p className={s.ranking}>{getRanking(prod.ranking)}</p>
          <p>${prod.precio}</p>
        </div>
      </div>
    </Link>
  );
};

export default function index({ productos }) {
  return (
    <div className={s.container}>
      <h3>BEST SELLERS</h3>
      <div className={s.productos}>
        {productos?.map((prod) => {
          if (prod.bestSeller == "true")
            return <BestSeller prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
}
