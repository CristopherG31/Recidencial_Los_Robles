import React, { useState } from 'react';

function ColonoForm({ onAddColono }) {
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [estatus, setEstatus] = useState('Activo');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoColono = { nombre, direccion, estatus };
    onAddColono(nuevoColono);
    setNombre('');
    setDireccion('');
    setEstatus('Activo');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Colono</h2>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre Completo"
        required
      />
      <input
        type="text"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
        placeholder="Dirección"
        required
      />
      <select value={estatus} onChange={(e) => setEstatus(e.target.value)}>
        <option value="Activo">Activo</option>
        <option value="Inactivo">Inactivo</option>
      </select>
      <button type="submit">Agregar Colono</button>
    </form>
  );
}

export default ColonoForm;
