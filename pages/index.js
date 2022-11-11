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
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import boy3 from "../public/img/productos/boys-8-1-580x870.jpg";

export default function Home() {
  const datos = [
    {
      id: 5,
      img: boy3,
      categoria: "Babies",
      nombre: "Line Sweater",
      precio: "$46.00",
      bestSeller: false,
      stock: 3,
      ranking: 3,
    },
    {
      id: 6,
      img: boy3,
      categoria: "Babies",
      nombre: "Line Sweater",
      precio: "$46.00",
      bestSeller: false,
      stock: 3,
      ranking: 3,
    },
    {
      id: 7,
      img: boy3,
      categoria: "Babies",
      nombre: "Line Sweater",
      precio: "$46.00",
      bestSeller: false,
      stock: 3,
      ranking: 3,
    },
    {
      id: 8,
      img: boy3,
      categoria: "Babies",
      nombre: "Line Sweater",
      precio: "$46.00",
      bestSeller: false,
      stock: 3,
      ranking: 3,
    },
    {
      id: 9,
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
        <Divisor text="NEW ARRIVALS" />
        <main className={s.Categorias_Productos}>
          <sidebar className={s.categorias}>
            <SearchBar />
            <Categorias />
            <BestSellers />
            <Newsletter />
          </sidebar>

          {datos?.map((prod) => {
            return <Producto prod={prod} key={prod.id} imagen={prod.img.src} />;
          })}
        </main>

        <Divisor text="INSTAGRAM @KISRUS" />
      </div>
      <Footer />
    </div>
  );
}
