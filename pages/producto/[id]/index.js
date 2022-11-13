import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Banner from "../../../components/Banner";
import Navbar from "../../../components/Navbar";
import ProductDetail from "../../../components/ProductDetail";
import Divisor from "../../../components/ProductDetail/divisor";
import s from "../../../styles/pDetail.module.css";
import MenuAddData from "../../../components/ProductDetail/MenuAddData";
import DivGral from "../../../components/Divisor";

export default function pDetail({ prod, rev }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Banner />
      <div className={s.container}>
        <Navbar />
      </div>
      <Divisor prod={prod} />
      <div className={s.container}>
        <ProductDetail prod={prod} />
        <MenuAddData rev={rev} prod={prod} />
        <DivGral text="RELATED PRODUCTS" />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  let { id } = params;

  const productoApi = await fetch(`http://localhost:3000/api/producto/${id}`);
  const resp = await productoApi.json();

  const related =  await fetch(`http://localhost:3000/api/related/${id}`);

  // const reviewApi = await fetch(`http://localhost:3000/api/reviews/${id}`);
  // const review = await reviewApi.json();

  return {
    props: {
      prod: resp.prod,
      rev: resp.rev,
    },
  };
}
