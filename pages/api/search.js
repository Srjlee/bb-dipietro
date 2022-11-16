let { datos } = require("../../public/datos");

export default function handler(req, res) {
  let { nombre } = req.query;

  if (nombre == "") {
    res.json([]);
  } else {
    let respuesta = datos.filter((el) => {
      return el.nombre.toLowerCase().includes(nombre);
    });
    const prods = respuesta.map((p) => {
      return {
        nombre: p.nombre,
        id: p.id,
      };
    });

    return res.json(prods);
  }
}
