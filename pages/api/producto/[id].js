const { productos, reviews } = require("../../../public/datos");

export default async function handler(req, res) {
  const { id } = req.query;

  const prod = productos.find((p) => p.id == id);
  console.log(prod.categoria);

  const rev = reviews.filter((r) => r.idProd == prod.id);

  const related = productos.filter((r) => r.categoria == prod.categoria);

  if (prod.length !== -1) {
    res.status(200).json({ prod, rev, related });
  } else {
    res.status(500).send("Producto No Encontrado");
  }
}
