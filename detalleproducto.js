import React from 'react';
import { useParams } from 'react-router-dom';

function DetalleProducto() {
  const { id } = useParams();

  const producto = {
    id,
    nombre: `remera ${id}`,
    descripcion: `remera de verano ${id}`,
  };

  return (
    <div>
      <h1>Detalle del Producto</h1>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
    </div>
  );
}

export default DetalleProducto;
