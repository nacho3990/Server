const express = require('express');
const app = express();
const port = 8080;

const productos = [
  { id: 1, nombre: 'Producto 1', precio: 10 },
  { id: 2, nombre: 'Producto 2', precio: 20 },
  { id: 3, nombre: 'Producto 3', precio: 30 },
  { id: 4, nombre: 'Producto 4', precio: 40 },
  { id: 5, nombre: 'Producto 5', precio: 50 },
  { id: 6, nombre: 'Producto 6', precio: 60 },
  { id: 7, nombre: 'Producto 7', precio: 70 },
  { id: 8, nombre: 'Producto 8', precio: 80 },
  { id: 9, nombre: 'Producto 9', precio: 90 },
  { id: 10, nombre: 'Producto 10', precio: 100 }
];

app.get('/products', (req, res) => {
  const { limit } = req.query;

  if (limit) {
    const limitedProducts = productos.slice(0, limit);
    return res.json(limitedProducts);
  }

  return res.json(productos);
});


app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  const product = productos.find(item => item.id === parseInt(id));

  if (product) {
    return res.json(product);
  } else {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
