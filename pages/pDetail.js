import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import s from "../styles/pDetail.module.css";

export default function pDetail() {
  return (
    <>
      <Banner />
      <div className={s.container}>
        <Navbar />
      </div>
    </>
  );
}
