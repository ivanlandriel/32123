import React from 'react';
import { Link } from 'react-router-dom';

const productos = [
  { id: 1, nombre: 'remera', descripcion: 'remera de verano' },
  { id: 2, nombre: 'pantalon', descripcion: 'pantalon de vestir' },
];

function Catalogo() {
  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <Link to={`/producto/${producto.id}`}>{producto.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalogo;
