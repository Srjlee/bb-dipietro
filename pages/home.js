import React from "react";
import s from "../styles/Main.module.css";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Destacados from "../components/Destacados";
import Categorias_banner from "../components/Categorias_banner";
import SearchBar from "../components/SearchBar";
import Divisor from "../components/Divisor";
import Categorias from "../components/Categorias";
import BestSellers from "../components/BestSellers";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className={s.container}>
        <Navbar />
        <Destacados />
        <Categorias_banner />
        <Divisor />
        <div className={s.Categorias_Productos}>
          <sidebar className={s.Categorias}>
            <SearchBar />
            <Categorias />
            <BestSellers />
          </sidebar>
          <main className={s.Products}></main>
        </div>
      </div>
    </div>
  );
}
