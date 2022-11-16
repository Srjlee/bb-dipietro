import { useState, useEffect, useRef, useContext } from "react";
import s from "./pDetail.module.css";
import { getRanking } from "../../public/datos";
import AddToCart from "./addToCart";
import AdditionalData from "./AdditionalData";

import { cartContext } from "../../context/provider";

export default function ProductDetail({ prod }) {
  const [imgRender, setImgRender] = useState("");
  const [hoverRef, isHovered] = useHover();
  const [ejes, setEjes] = useState({ x: 0, y: 0 });
  const { favoritos } = useContext(cartContext);
  const [isFav, setIsfav] = useState(false);

  useEffect(() => {
    if (favoritos.includes(prod.id)) {
      setIsfav(true);
    }
    setImgRender(prod.img[0]);
  }, [prod]);

  const setImagen = (e) => {
    setImgRender(e);
  };

  const onMouse = (e) => {
    setEjes({ x: e.clientX, y: e.clientY });
  };
  return (
    <div className={s.container}>
      <div
        className={s.imagen}
        onMouseMove={onMouse}
        ref={hoverRef}
        style={{ backgroundImage: `url(${imgRender})` }}
      >
        {isHovered && (
          <div
            style={{
              backgroundImage: `url(${imgRender})`,

              height: "40rem",
              width: "30rem",
              backgroundRepeat: "no-repeat",
              backgroundSize: "200%",
              position: "absolute",
              left: "50%",
              backgroundPosition: `${-ejes.x + 50}px ${-ejes.y + 50}px`,
            }}
          ></div>
        )}
      </div>
      {prod.stock == 0 ? null : (
        <div className={s.carrousel}>
          {prod.img.map((i) => {
            return (
              <div
                className={s.imagen_carro}
                style={{ backgroundImage: `url(${i})` }}
                key={i}
                onClick={() => setImagen(i)}
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
          <AddToCart prod={prod} />
          {isFav ? (
            <div className={s.wishlist}>
              <p>Product added! </p>
              <p>Browse Wishlist</p>
            </div>
          ) : null}
          <AdditionalData prod={prod} />
        </div>
      </div>
    </div>
  );
}

function useHover() {
  const [value, setValue] = useState(false);
  const ref = useRef(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);
  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);
      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref.current]);
  return [ref, value];
}
