import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Banner from "../../../components/Banner";
import Navbar from "../../../components/Navbar";
import ProductDetail from "../../../components/ProductDetail";
import Divisor from "../../../components/ProductDetail/divisor";
import s from "../../../styles/pDetail.module.css";
import DivGral from "../../../components/Divisor";

export default function pDetail({ prod }) {
  const router = useRouter();
  const { id } = router.query;

  const menuDiv = (
    <ul>
      <li>DESCRIPTION</li>
      <li>ADDITIONAL INFORMATION</li>
      <li>REVIEWS {`(${prod.reviews})`}</li>
    </ul>
  );

  return (
    <>
      <Banner />
      <div className={s.container}>
        <Navbar />
      </div>
      <Divisor prod={prod} />
      <div className={s.container}>
        <ProductDetail prod={prod} />
        <DivGral ul={menuDiv} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  let { id } = params;

  const productoApi = await fetch(`http://localhost:3000/api/producto/${id}`);
  const prod = await productoApi.json();

  // const reviewApi = await fetch(`http://localhost:3000/api/reviews/${id}`);
  // const review = await reviewApi.json();

  return {
    props: {
      prod,
    },
  };
}
