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
import tira1 from "../public/img/tira/tira1.jpg";
import tira2 from "../public/img/tira/tira2.jpg";
import tira3 from "../public/img/tira/tira3.jpg";
import tira4 from "../public/img/tira/tira4.jpg";
import tira5 from "../public/img/tira/tira5.jpg";
import pruebaIMG from "../public/img/prod/blueBlouse.jpg";

const imagenes = [
  { img: tira1, id: 1 },
  { img: tira2, id: 2 },
  { img: tira3, id: 3 },
  { img: tira4, id: 4 },
  { img: tira5, id: 5 },
];

export default function Home({ productos }) {
  const { cart, setCart } = useContext(cartContext);

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
              return <Producto prod={prod} key={prod.id} />;
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
  const { categoria } = context.query;

  const ruta = `http://localhost:3000/api/datos${
    categoria ? `?categoria=${categoria}` : ""
  }`;

  const consApi = await fetch(ruta);
  const productos = await consApi.json();

  return {
    props: {
      productos: productos,
    },
  };
}
