import React from "react";
import s from "../styles/Main.module.css";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Destacados from "../components/Destacados";

export default function Home() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Destacados />
    </div>
  );
}
