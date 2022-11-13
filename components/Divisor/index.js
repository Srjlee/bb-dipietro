import React from "react";
import s from "./Divisor.module.css";
import Image from "next/image";
import divisor from "./home-8.png";

export default function index({ text, ul }) {
  return (
    <div className={s.container}>
      {ul ? (
        ul
      ) : (
        <>
          <ul>
            <li>
              {text}
              <Image
                src={divisor}
                alt="Subrayado de frase"
                width="100"
                priority
              />
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
