import { useState, useCallback } from "react";
import useEventListener from "./use-event-listener";
import Banner from "../../../components/Banner";
import Navbar from "../../../components/Navbar";
import ProductDetail from "../../../components/ProductDetail";
import Divisor from "../../../components/ProductDetail/divisor";
import s from "../../../styles/pDetail.module.css";
import MenuAddData from "../../../components/ProductDetail/MenuAddData";
import DivGral from "../../../components/Divisor";
import Producto from "../../../components/Producto";
import Footer from "../../../components/Footer";

export default function pDetail({ prod, rev, related }) {
  const renderRelated = related.slice(0, 4);

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Event handler utilizing useCallback ...
  // ... so that reference never changes.
  const handler = useCallback(
    ({ clientX, clientY }) => {
      // Update coordinates
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  // Add event listener using our hook
  useEventListener("mousemove", handler);

  return (
    <>
      <Banner />
      <div className={s.container}>
        <Navbar />
      </div>
      <Divisor prod={prod} />
      <div className={s.container}>
        <ProductDetail prod={prod} />
        <MenuAddData rev={rev} prod={prod} />
        <DivGral text="RELATED PRODUCTS" />
        <div className={s.relatedProd}>
          {renderRelated?.map((p) => {
            return <Producto prod={p} key={p.id} />;
          })}
        </div>
        <h1>
          The mouse position is ({coords.x}, {coords.y})
        </h1>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  let { id } = params;

  const productoApi = await fetch(`http://localhost:3000/api/producto/${id}`);
  const resp = await productoApi.json();

  return {
    props: {
      prod: resp.prod,
      rev: resp.rev,
      related: resp.related,
    },
  };
}
