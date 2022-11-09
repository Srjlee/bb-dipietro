import React from "react";
import Image from "next/image";
import s from "./Destacados.module.css";
import girlPower from "../../public/img/girls-power.jpg";

export default function index() {
  return (
    <div>
      <section className={s.destacados}>
        <div className={s.destacado_1}>
          <div className={s.destacado_1_datos}>
            <h2>JUMPSUITS</h2>
            <span>Comfortable clothes for your little babies</span>
            <br />
            <button className={s.btn}>
              <p>DISCOVER</p>
            </button>
          </div>
        </div>
        <div className={s.destacado_2}>
          <Image src={girlPower} width="320" alt="girl Power" priority />

          <div className={s.destacado_2_datos}>
            <h3>GIRL POWER</h3>
            <span>For a colorful summer</span>
          </div>
        </div>
      </section>
    </div>
  );
}
