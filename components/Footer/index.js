import React from "react";
import s from "./footer.module.css";
import Navbar from "./footNav";

export default function index() {
  return (
    <div className={s.container}>
      <Navbar />
    </div>
  );
}
