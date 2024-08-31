import React from 'react';

function ColonoList({ colonos }) {
  return (
    <div>
      <h2>Lista de Colonos</h2>
      <ul>
        {colonos.map((colono, index) => (
          <li key={index}>
            {colono.nombre} - {colono.direccion} - {colono.estatus}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColonoList;
