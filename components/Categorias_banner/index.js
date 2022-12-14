import React from "react";
import Image from "next/image";
import s from "./Categorias_banner.module.css";
import baby from "../../public/img/baby.png";
import boy from "../../public/img/boy.png";
import girl from "../../public/img/girl.png";
import toys from "../../public/img/toys.png";
import Link from "next/link";

export default function Categorias_banner() {
  return (
    <section className={s.container}>
      <Link href="/?categoria=for baby#productos">
        <div className={s.categoria}>
          <Image src={baby} alt="Seccion Baby" width="100" />
          <p>Baby & Toddler</p>
        </div>
      </Link>
      <Link href="/?categoria=for girls#productos">
        <div className={s.categoria}>
          <Image src={girl} alt="Seccion Girl" width="100" />
          <p>For Girl</p>
        </div>
      </Link>
      <Link href="/?categoria=for boys#productos">
        <div className={s.categoria}>
          <Image src={boy} alt="Seccion Boys" width="100" />
          <p>For Boys</p>
        </div>
      </Link>
      <Link href="/?categoria=for play#productos">
        <div className={s.categoria}>
          <Image src={toys} alt="Seccion Toys" width="100" />
          <p>Home & Toys</p>
        </div>
      </Link>
    </section>
  );
}
