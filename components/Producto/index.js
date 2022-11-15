import { useEffect, useState, useContext, useRef } from "react";
import s from "./Producto.module.css";
import Link from "next/link";
import { cartContext } from "../../context/provider";

export default function Producto({ prod }) {
  const [hoverRef, isHovered] = useHover();
  const [imgRender, setImgRender] = useState(prod.img[0]);
  const { setCart, setFavoritos, favoritos } = useContext(cartContext);
  const [isFav, setIsfav] = useState(false);
  const heart = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentcolor"
      fill={isFav ? "currentcolor" : "none"}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    </svg>
  );
  const search = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentcolor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="10" cy="10" r="7" />
      <line x1="21" y1="21" x2="15" y2="15" />
    </svg>
  );

  const buyHandle = () => {
    setCart((prev) => [...prev, prod.id]);
  };

  const favHandle = () => {
    if (!isFav) return setFavoritos((prev) => [...prev, prod.id]);
    setFavoritos(favoritos.filter((f) => f !== prod.id));
  };

  useEffect(() => {
    setImgRender(prod.img[0]);
    if (prod.img[1] && isHovered) {
      setImgRender(prod.img[1]);
    }
    if (favoritos.includes(prod.id)) {
      setIsfav(true);
    } else {
      setIsfav(false);
    }
  }, [isHovered, favoritos, isFav]);

  return (
    <div className={s.container}>
      <div
        className={s.imagen}
        id={prod.id}
        style={{ backgroundImage: `url(${imgRender})` }}
        ref={hoverRef}
      >
        {prod.stock == 0 ? (
          <>
            <div className={s.outStock}>out of stock</div>
            <div className={s.addToCart} id={s.addToCart}>
              <ul className={s.addToCart_datos}>
                <li onClick={favHandle}>{heart}</li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div> </div>
            <div className={s.addToCart} id={s.addToCart}>
              <ul className={s.addToCart_datos}>
                <li onClick={favHandle}>{heart}</li>
                <li onClick={buyHandle}>add to cart</li>
                <li>{search}</li>
              </ul>
            </div>
          </>
        )}
      </div>
      <Link href={`/producto/${prod.id}`}>
        <div className={s.datos}>
          <div className={s.categoria}>
            <p>{prod.categoria}</p>
          </div>
          <div className={s.nombre}>
            <p>{prod.nombre}</p>
          </div>
          {prod.stock !== 0 ? (
            <div className={s.precio}>{<p>${prod.precio}</p>}</div>
          ) : (
            <div className={s.precio}>{<p></p>}</div>
          )}
        </div>
      </Link>
    </div>
  );
}

function useHover() {
  const [value, setValue] = useState(false);
  const ref = useRef(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);
  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);
        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );
  return [ref, value];
}
