import React from "react";
import s from "./Divisor.module.css";
import Image from "next/image";
import divisor from "./home-8.png";

export default function index({ text }) {
  return (
    <div className={s.container}>
      <h3>{text}</h3>
      <Image src={divisor} alt="Subrayado de frase" width="100" priority />
    </div>
  );
}
