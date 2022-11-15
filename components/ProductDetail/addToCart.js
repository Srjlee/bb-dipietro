import { useContext } from "react";
import s from "./addToCart.module.css";
import { cartContext } from "../../context/provider";

export default function index({ prod }) {
  const { setCart } = useContext(cartContext);
  const buyHandle = () => {
    setCart((prev) => [...prev, prod.id]);
  };
  return (
    <div className={s.container}>
      <input type="number" className={s.cantidad} placeholder="1" />
      <div onClick={buyHandle} className={s.container_text}>
        <div className={s.texto}>
          <p>ADD TO CART</p>
        </div>
      </div>
    </div>
  );
}
