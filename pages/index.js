import React from "react";
import s from "../styles/Home.module.css";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Destacados from "../components/Destacados";
import Categorias_banner from "../components/Categorias_banner";
import SearchBar from "../components/SearchBar";
import Divisor from "../components/Divisor";
import Categorias from "../components/Categorias";
import BestSellers from "../components/BestSellers";
import Producto from "../components/Producto";
import boy3 from "../public/img/productos/boys-8-1-580x870.jpg";

export default function Home() {
  const datos = [
    {
      id: 1,
      img: boy3,
      categoria: "Babies",
      nombre: "Line Sweater",
      precio: "$46.00",
      bestSeller: false,
      stock: 3,
      ranking: 3,
    },
    {
      id: 1,
      img: boy3,
      categoria: "Babies",
      nombre: "Line Sweater",
      precio: "$46.00",
      bestSeller: false,
      stock: 3,
      ranking: 3,
    },
    {
      id: 1,
      img: boy3,
      categoria: "Babies",
      nombre: "Line Sweater",
      precio: "$46.00",
      bestSeller: false,
      stock: 3,
      ranking: 3,
    },
    {
      id: 1,
      img: boy3,
      categoria: "Babies",
      nombre: "Line Sweater",
      precio: "$46.00",
      bestSeller: false,
      stock: 3,
      ranking: 3,
    },
    {
      id: 1,
      img: boy3,
      categoria: "Babies",
      nombre: "Line Sweater",
      precio: "$46.00",
      bestSeller: false,
      stock: 3,
      ranking: 3,
    },
    {
      id: 1,
      img: boy3,
      categoria: "Babies",
      nombre: "Line Sweater",
      precio: "$46.00",
      bestSeller: false,
      stock: 3,
      ranking: 3,
    },
    {
      id: 2,
      img: boy3,
      categoria: "Babies",
      nombre: "Line Sweater",
      precio: "$46.00",
      bestSeller: false,
      stock: 3,

      ranking: 3,
    },
    {
      id: 3,
      img: boy3,
      categoria: "Babies",
      nombre: "Line Sweater",
      precio: "$46.00",
      bestSeller: false,
      stock: 3,

      ranking: 3,
    },
    {
      id: 4,
      img: boy3,
      categoria: "Babies",
      nombre: "Line Sweater",
      precio: "$46.00",
      bestSeller: false,
      stock: 3,

      ranking: 3,
    },
  ];

  return (
    <div>
      <Banner />
      <div className={s.container}>
        <Navbar />
        <Destacados />
        <Categorias_banner />
        <Divisor />
        <main className={s.Categorias_Productos}>
          <sidebar className={s.categorias}>
            <SearchBar />
            <Categorias />
            <BestSellers />
          </sidebar>

          {datos?.map((prod) => {
            return <Producto prod={prod} key={prod.id} />;
          })}
        </main>
      </div>
    </div>
  );
}
