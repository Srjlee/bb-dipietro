const { productos } = require("../../public/datos");

export default function handler(req, res) {
  let { categoria } = req.query;

  if (categoria) {
    const prodCat = productos.filter((c) => c.categoria == categoria);
    res.json(prodCat);
  } else {
    res.json(productos);
  }
}
