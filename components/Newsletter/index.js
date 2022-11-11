import React from "react";
import s from "./News.module.css";

export default function index() {
  return (
    <div className={s.container}>
      <div className={s.titulo}>
        <p>Join Our Newsletter</p>
      </div>
      <input
        className={s.input}
        placeholder="Your Email Address*"
        type="email"
      />
      <button className={s.btn}>
        <p>SUBSCRIBE</p>
      </button>
    </div>
  );
}
