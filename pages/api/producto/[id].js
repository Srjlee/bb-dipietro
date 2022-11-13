const { productos, reviews } = require("../../../public/datos");

export default async function handler(req, res) {
  const { id } = req.query;

  const prod = productos.find((p) => p.id == id);
  const rev = reviews.filter((r) => r.idProd == prod.id);

  if (prod.length !== -1) {
    res.status(200).json({ prod, rev });
  } else {
    res.status(500).send("Producto No Encontrado");
  }
}
