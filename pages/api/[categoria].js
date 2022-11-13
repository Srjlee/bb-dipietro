const { productos } = require("../../public/datos");

export default function handler(req, res) {
  const { categoria } = req.query;

  const related = productos.filter((r) => productos.categoria == r.categoria);
  res.json(related);
}
