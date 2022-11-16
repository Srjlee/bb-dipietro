import { useState, useEffect } from "react";
import s from "./SearchBar.module.css";
import axios from "axios";
import Link from "next/link";

export default function SearchBar() {
  const [r, setR] = useState([]);
  const [search, setSearch] = useState({
    search: "",
  });

  useEffect(() => {
    axios(`/api/search?nombre=${search.search}`).then((d) => setR(d.data));
  }, [search]);

  const handleInput = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };

  return (
    <div className={s.container} id="searchbar">
      <input
        type="text"
        className={s.search}
        placeholder="Search products..."
        name="search"
        value={search.search}
        onChange={handleInput}
      />
      <div className={s.contenedor_img}>
        <div className={s.imagen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        </div>
      </div>
      {r.length > 0 && (
        <div className={s.resultado}>
          {r.map((p) => {
            return (
              <Link href={`/producto/${p.id}`} key={p.id}>
                <p>{p.nombre}</p>
              </Link>
            );
          })}{" "}
        </div>
      )}
    </div>
  );
}
