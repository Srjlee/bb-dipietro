import { useContext } from "react";
import { cartContext } from "../context/provider";
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
import { imgtira } from "../public/datos";

export default function Home({ productos, qCategories, bestSeller }) {
  const { cart, setCart } = useContext(cartContext);

  return (
    <div>
      <Banner />
      <div className={s.container}>
        <Navbar />
        <Destacados />
        <Categorias_banner />
        <Divisor text="NEW ARRIVALS" />
        <main className={s.Categorias_Productos} id="productos">
          <section className={s.categorias}>
            <SearchBar />
            <Categorias qCat={qCategories} />
            <BestSellers productos={bestSeller} />
            <Newsletter />
          </section>

          {productos?.slice(0, 9).map((prod) => {
            if (prod.bestSeller == "false") {
              return <Producto prod={prod} key={prod.id} />;
            }
          })}
        </main>

        <Divisor text="INSTAGRAM @KISRUS" />
        <Imagenes imagenes={imgtira} />
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { categoria } = context.query;

  const ruta = `http://localhost:3000/api/datos${
    categoria ? `?categoria=${categoria}` : ""
  }`;

  const consApi = await fetch(ruta);
  const { productos, qCategories, bestSeller } = await consApi.json();

  return {
    props: {
      productos,
      qCategories,
      bestSeller,
    },
  };
}
