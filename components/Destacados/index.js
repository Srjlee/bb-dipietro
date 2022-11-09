import React from "react";
import s from "./Destacados.module.css";

export default function index() {
  return (
    <div>
      <section className={s.destacados}>
        <div className={s.destacado_1}>
          <div className={s.destacado_1_datos}>
            <h2>JUMPSUITS</h2>
            <span>Comfortable clothes for your little babies</span>
            <br />
            <button>DISCOVER</button>
          </div>
        </div>
        <div className={s.destacado_2}>prueba</div>
      </section>
    </div>
  );
}
