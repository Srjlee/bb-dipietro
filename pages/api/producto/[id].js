const { productos } = require("../../../public/datos");

export default async function handler(req, res) {
  const { id } = req.query;

  const prod = productos.find((p) => p.id == id);

  if (prod.length !== -1) {
    res.status(200).json(prod);
  } else {
    res.status(500).send("Producto No Encontrado");
  }
}
