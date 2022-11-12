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
import Imagenes from "../components/Imagenes";
import tira1 from "../public/img/tira/tira1.jpg";
import tira2 from "../public/img/tira/tira2.jpg";
import tira3 from "../public/img/tira/tira3.jpg";
import tira4 from "../public/img/tira/tira4.jpg";
import tira5 from "../public/img/tira/tira5.jpg";
import pruebaIMG from "../public/img/prod/blueBlouse.jpg";

const imagenes = [tira1, tira2, tira3, tira4, tira5];

export default function Home({ productos }) {
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
            <BestSellers productos={productos} imagen={pruebaIMG.src} />
            <Newsletter />
          </sidebar>

          {productos?.map((prod) => {
            if (prod.bestSeller == "false") {
              return <Producto prod={prod} key={prod.id} imagen={prod.img} />;
            }
          })}
        </main>

        <Divisor text="INSTAGRAM @KISRUS" />
        <Imagenes imagenes={imagenes} />
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  // let { categoria } = query;

  // const Uri = `${process.env.URL}/api/catalogo${
  //   categoria || orderPrice || MinPrice || MaxPrice ? "?" : ""
  // }${categoria ? `categoria=${categoria}` : ""}${
  //   orderPrice ? `orderPrice=${orderPrice}` : ""
  // }${MinPrice ? `MinPrice=${MinPrice}&` : ""}${
  //   MaxPrice ? `MaxPrice=${MaxPrice}` : ""
  // }`;

  const consApi = await fetch("http://localhost:3000/api/datos");
  const productos = await consApi.json();

  // const consCategories = await fetch(`${process.env.URL}/api/getCategories`);
  // const categories = await consCategories.json();

  return {
    props: {
      productos: productos,
    },
  };
}
