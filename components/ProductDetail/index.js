import { useState,useCallback } from "react";
import s from "./pDetail.module.css";
import Image from "next/image";
import { getRanking } from "../../public/datos";
import AddToCart from "./addToCart";
import AdditionalData from "./AdditionalData";
import useEventListener from "./use-event-listener";

export default function index({ prod }) {
  const [imgRender, setImgRender] = useState(
    prod.img[0]
  )

  const setImagen = (e) => {
    setImgRender (e)
  }

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
    <div className={s.container}>
      <div
        className={s.imagen}
        id="imagen"
        style={{ backgroundImage: `url(${imgRender})` }}
      ></div>
      {prod.stock == 0 ? null : (
        <div className={s.carrousel}>
          {prod.img.map((i) => {
            return (
              <div
                className={s.imagen_carro}
                style={{ backgroundImage: `url(${i})` }}
                key={i}
                onClick={()=>setImagen(i)}
              ></div>
            );
          })}
        </div>
      )}
      <div className={s.detalle}>
        <p className={s.detPrecio}>${prod.precio}</p>
        <p className={s.detRanking}>{getRanking(prod.ranking)}</p>
        <p className={s.detTexto}>
          {" "}
          Fever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recen
        </p>
        <div className={s.addToCart}>
          <AddToCart />
          <div className={s.wishlist}>
            <p>Product added! </p>
            <p>Browse Wishlist</p>
          </div>
          <AdditionalData prod={prod} />
        </div>
      </div>
      <h1>
          The mouse position is ({coords.x}, {coords.y})
        </h1>
    </div>
  );
}
