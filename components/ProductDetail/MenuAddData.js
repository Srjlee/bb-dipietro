import { useState } from "react";
import s from "./MenuAddData.module.css";
import AddInfo from "./AddInfo";
import { getRanking } from "../../public/datos";
import Imagen from "next/image";
import subrayado from "../../public/home-8.png";

export default function MenuAddData({ rev, prod }) {
  const InfoData = {
    descripcion: (
      <div className={s.descripcion}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut mi
          in dui interdum congue. Mauris ut pulvinar orci. Etiam et tellus
          gravida, porttitor risus nec, suscipit dolor. Nam rhoncus ipsum sed
          ligula aliquam facilisis vitae id orci. Duis vestibulum sapien vitae
          fermentum tristique. Nam eget sem congue, tincidunt ex at, euismod
          lacus. Mauris porttitor dignissim purus, ac commodo nibh porta eu.
          Donec accumsan ipsum id ante luctus, ac consequat nunc rhoncus. Proin
          rutrum facilisis mi eu iaculis. Aenean vitae lacinia lorem.
          Suspendisse posuere lorem metus, ut pulvinar libero elementum id.
        </p>
        <p>
          Aliquam purus sem, pulvinar vitae vehicula eget, dictum sed mi. Sed eu
          metus lectus. In hac habitasse platea dictumst. Praesent mollis nisl
          et nisi commodo interdum. Integer mauris neque, consequat dapibus
          interdum in, luctus feugiat velit. Aliquam finibus rhoncus odio,
          vulputate varius ipsum cursus et. Proin efficitur dui at est
          ullamcorper, sed maximus nisi placerat. Nulla laoreet posuere lectus,
          ut sodales erat pellentesque eget. Quisque nec est enim. Donec
        </p>
      </div>
    ),
    addInfo: (
      <div name="addInfo" id={s.addInfo}>
        <AddInfo prod={prod} />
      </div>
    ),
    reviews: (
      <div name="reviews" id={s.reviews}>
        <p className={s.qReviews}>
          {rev.length} reviews for {prod.nombre}
        </p>
        {rev.map((r) => {
          return (
            <div className={s.datosReviews} key={r.id} multiple>
              <div
                className={s.imgRev}
                style={{ backgroundImage: `url(${r.userImg})` }}
              ></div>
              <div className={s.detalleReview}>
                <div className={s.user}>
                  <p>{r.user}</p>
                  <p className={s.fecha}>{r.fecha}</p>
                </div>
                <div className={s.rating}>{getRanking(r.rankOtorgado)}</div>
                <div className={s.revDescripcion}>{r.descripcion}</div>
              </div>
            </div>
          );
        })}
        <p>Rated 5 out of 5</p>
      </div>
    ),
  };
  const renderStrategy = (mostrar) => {
    if (mostrar == "descripcion") return InfoData.descripcion;
    if (mostrar == "addInfo") return InfoData.addInfo;
    if (mostrar == "reviews") return InfoData.reviews;
  };

  const [mostrar, setMostrar] = useState("descripcion");

  return (
    <div className={s.container}>
      <div className={s.menu}>
        <ul>
          <li
            onClick={() => {
              setMostrar("descripcion");
            }}
          >
            DESCRIPTION
          </li>

          {prod.stock == 0 ? null : (
            <li
              onClick={() => {
                setMostrar("addInfo");
              }}
            >
              ADDITIONAL INFORMATION
            </li>
          )}
          <li
            onClick={() => {
              setMostrar("reviews");
            }}
          >
            REVIEWS ({rev.length})
          </li>
        </ul>
        {mostrar == "reviews" ? (
          <Imagen
            src={subrayado}
            alt="subrayado"
            style={{ position: "absolute", left: "66%", top: "277%" }}
          />
        ) : mostrar == "addInfo" ? (
          <Imagen
            src={subrayado}
            alt="subrayado"
            style={{ position: "absolute", left: "49%", top: "277%" }}
          />
        ) : (
          <Imagen
            src={subrayado}
            alt="subrayado"
            style={{ position: "absolute", left: "32%", top: "277%" }}
          />
        )}
      </div>
      <div className={s.informacion}>{renderStrategy(mostrar)}</div>
    </div>
  );
}
