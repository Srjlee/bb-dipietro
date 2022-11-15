let { datos } = require("../../public/datos");

const qCategories = datos.reduce((ac, b) => {
  if (ac.hasOwnProperty(b.categoria)) {
    if (b.bestSeller == "false") {
      ac[b.categoria] += 1;
    }
  } else {
    ac[b.categoria] = 1;
  }
  return ac;
}, {});

export default function handler(req, res) {
  let { categoria } = req.query;

  const productos = datos.reduce(
    (ac, b) => {
      if (b.bestSeller == "true") {
        ac.bestSeller.push(b);
      } else {
        ac.prods.push(b);
      }

      return ac;
    },
    { bestSeller: [], prods: [] }
  );

  if (categoria) {
    productos.prods = productos.prods.filter((c) => c.categoria == categoria);

    res.json({
      productos: productos.prods,
      qCategories,
      bestSeller: productos.bestSeller,
    });
  } else {
    productos.prods = productos.prods.sort(() => Math.random() - 0.5);

    res.json({
      productos: productos.prods,
      qCategories,
      bestSeller: productos.bestSeller,
    });
  }
}
