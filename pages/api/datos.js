const { productos } = require("../../public/datos");

export default function handler(req, res) {
  res.json(productos);
}
