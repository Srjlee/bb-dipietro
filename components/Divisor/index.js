import React from "react";
import s from "./Divisor.module.css";
import Image from "next/image";
import divisor from "../../public/home-8.png";

export default function Divisor({ text }) {
  return (
    <div className={s.container}>
      <h3>{text}</h3>
      <Image src={divisor} alt="imagen divisor" />
    </div>
  );
}
