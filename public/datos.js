import { useState, useRef, useEffect } from "react";

const productos = [
  {
    id: 1,
    sku: "0001",
    img: [
      "https://i.postimg.cc/SRg62MCJ/blue-Blouse.jpg",
      "https://i.postimg.cc/9f9Y8z5n/blue-Blouse1.jpg",
    ],
    categoria: "for girls",
    nombre: "blue blouse",
    precio: "22.00",
    bestSeller: "false",
    stock: 5,
    ranking: 4,
    tags: ["blouse", "girls"],
    color: "blue",
    material: "cotton",
    age: 6,
  },
  {
    id: 2,
    sku: "0002",
    img: [
      "https://i.postimg.cc/JzvQ5ZgX/brown-Rainy-Bag.jpg",
      "https://i.postimg.cc/50qqJGt5/brown-Rainy-Bag1.jpg",
    ],
    categoria: "for home",
    nombre: "brown rainy bag",
    precio: "15.00",
    bestSeller: "false",
    stock: 5,
    ranking: 4,
    tags: ["blouse", "girls"],
    color: "brown",
    material: "jean",
    age: 6,
  },
  {
    id: 3,
    sku: "0003",
    img: [
      "https://i.postimg.cc/RF9KgRTW/rabbit-Bag.jpg",
      "https://i.postimg.cc/9MpTK7xJ/rabbit-Bag1.jpg",
    ],
    categoria: "for home",
    nombre: "rabbit bag",
    precio: "50.00",
    bestSeller: "false",
    stock: 0,
    ranking: 5,
    tags: ["blouse", "girls"],
    color: "brown",
    material: "cuero",
    age: 8,
  },
  {
    id: 4,
    sku: "0004",
    img: [
      "https://i.postimg.cc/9FS96Vp5/white-Blouse.jpg",
      "https://i.postimg.cc/q7H37LS1/white-Blouse1.jpg",
    ],
    categoria: "for girls",
    nombre: "white blouse",
    precio: "17.00",
    bestSeller: "false",
    stock: 6,
    ranking: 3,
    tags: ["blouse", "girls"],
    color: "white",
    material: "cotton",
    age: 4,
  },
  {
    id: 5,
    sku: "0005",
    img: [
      "https://i.postimg.cc/5y2vV2T1/rainbow-Pillow.jpg",
      "https://i.postimg.cc/6qbZ5NxZ/rainbow-Pillow1.jpg",
    ],
    categoria: "for home",
    nombre: "rainbow pillow",
    precio: "50.00",
    bestSeller: "false",
    stock: 0,
    ranking: 5,
    tags: ["blouse", "girls"],
    color: "blue",
    material: "plastic",
    age: "4 - 6",
  },
  {
    id: 6,
    sku: "0006",
    img: [
      "https://i.postimg.cc/8z2h6DJB/pink-Dress.jpg",
      "https://i.postimg.cc/mr773q7x/pink-Dress1.jpg",
    ],
    categoria: "for girls",
    nombre: "pink dress",
    precio: "18.00",
    bestSeller: "false",
    stock: 3,
    ranking: 4,
    tags: ["blouse", "girls"],
    color: "pink",
    material: "cotton",
    age: "6 - 8",
  },
  {
    id: 7,
    sku: "0007",
    img: [
      "https://i.postimg.cc/QxMkLfZ5/patten-Shirt.jpg",
      "https://i.postimg.cc/tRktmLwp/patten-Shirt1.jpg",
    ],
    categoria: "for boys",
    nombre: "pattern shirt",
    precio: "28.00",
    bestSeller: "false",
    stock: 2,
    ranking: 4,
    tags: ["blouse", "girls"],
    color: "blue",
    material: "cotton",
    age: 6,
  },
  {
    id: 8,
    sku: "0008",
    img: [
      "https://i.postimg.cc/h42T0VQG/shorts-With-Suspenders.jpg",
      "https://i.postimg.cc/Gh9Yg9vx/shorts-With-Suspenders2.jpg",
    ],
    categoria: "for boys",
    nombre: "shorts with suspenders",
    precio: "40.00",
    bestSeller: "false",
    stock: 1,
    ranking: 5,
    tags: ["blouse", "girls"],
    color: "blue",
    material: "suspender",
    age: 6,
  },
  {
    id: 9,
    sku: "0009",
    img: [
      "https://i.postimg.cc/4NFvXpX0/denim-Jacket.jpg",
      "https://i.postimg.cc/L59k8Tqc/denim-Jacket1.jpg",
    ],
    categoria: "for girls",
    nombre: "denin jacket",
    precio: "60.00",
    bestSeller: "false",
    stock: 0,
    ranking: 4,
    tags: ["blouse", "girls"],
    color: "blue",
    material: "corderoy",
    age: "10 - 12",
  },
  {
    id: 10,
    sku: "0010",
    img: ["https://i.postimg.cc/htbYCCLm/rabbit-Casket-BS.jpg"],
    categoria: "for home",
    nombre: "rabbit casket",
    precio: "17.00",
    bestSeller: "true",
    stock: 1,
    ranking: 4,
    tags: ["blouse", "girls"],
    color: "blue",
    material: "cotton",
    age: 6,
  },
  {
    id: 11,
    sku: "0011",
    img: ["https://i.postimg.cc/qMKSKBgj/yellow-Sweat-Shirt-BS.jpg"],
    categoria: "for boys",
    nombre: "yellow sweatshirt",
    precio: "38.00",
    bestSeller: "true",
    stock: 3,
    ranking: 4,
    tags: ["blouse", "girls"],
    color: "yellow",
    material: "cotton",
    age: 6,
  },
  {
    id: 12,
    sku: "0012",
    img: ["https://i.postimg.cc/7Zycnv2D/line-Sweater-BS.jpg"],
    categoria: "for boys",
    nombre: "line sweater",
    precio: "46.00",
    bestSeller: "true",
    stock: 2,
    ranking: 4,
    tags: ["blouse", "girls"],
    color: "blue",
    material: "cotton",
    age: 6,
  },
  {
    id: 13,
    sku: "0013",
    img: ["https://i.postimg.cc/Y2ZTjL2v/grey-Suit-BS.jpg"],
    categoria: "for boys",
    nombre: "grey suit",
    precio: "80.00",
    bestSeller: "true",
    stock: 1,
    ranking: 4,
    tags: ["blouse", "girls"],
    color: "grey",
    material: "cotton",
    age: 6,
  },
];
const getRanking = (ranking) => {
  return "★".repeat(ranking).padEnd(5, "☆");
};

const reviews = [
  {
    id: 1,
    fecha: "December 5, 2022",
    idProd: 1,
    user: "Pablo Di Pietro",
    userImg: "https://i.postimg.cc/rFW7bBrL/perfil.jpg",
    rankOtorgado: 4,
    descripcion:
      "Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualiza",
  },
  {
    id: 2,
    fecha: "December 15, 2018",
    idProd: 1,
    user: "Pepe Incognito",
    userImg:
      "https://i.postimg.cc/8PDx2yBJ/kisspng-computer-icons-person-black-shadow-5b25efb1047fd8-0063000815292128490184.png",
    rankOtorgado: 5,
    descripcion:
      "Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualiza",
  },
  {
    id: 3,
    fecha: "December 5, 2022",
    idProd: 2,
    user: "Pablo Di Pietro",
    userImg: "https://i.postimg.cc/rFW7bBrL/perfil.jpg",
    rankOtorgado: 4,
    descripcion:
      "Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualiza",
  },
  {
    id: 4,
    fecha: "December 5, 2022",
    idProd: 3,
    user: "Johny Meconozco",
    userImg:
      "https://i.postimg.cc/8PDx2yBJ/kisspng-computer-icons-person-black-shadow-5b25efb1047fd8-0063000815292128490184.png",
    rankOtorgado: 4,
    descripcion:
      "Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualiza",
  },
  {
    id: 5,
    fecha: "December 5, 2022",
    idProd: 5,
    user: "Pablo Di Pietro",
    userImg: "https://i.postimg.cc/rFW7bBrL/perfil.jpg",
    rankOtorgado: 4,
    descripcion:
      "Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualiza",
  },
];

const useHover = () => {
  const [value, setValue] = useState(false);
  const ref = useRef(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);
  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);
        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );
  return [ref, value];
};

module.exports = { productos, getRanking, reviews, useHover };
