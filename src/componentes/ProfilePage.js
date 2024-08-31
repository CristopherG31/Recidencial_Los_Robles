import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Suponiendo que tienes una función para obtener detalles del colono por ID
const getColonoById = (id) => {
  // Aquí deberías tener la lógica para obtener el colono por ID. Esto es solo un ejemplo.
  return {
    nombre: "Juan Pérez",
    direccion: "123 Calle Falsa",
    estatus: "Activo",
    pagos: [
      { monto: 500, fecha: '2024-08-01' },
      { monto: 300, fecha: '2024-07-15' },
    ],
  };
};

function ProfilePage() {
  const { id } = useParams();
  const [colono, setColono] = useState(getColonoById(id));
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ ...colono });

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setFormData({ ...colono });
    setEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveClick = () => {
    setColono({ ...formData });
    setEditing(false);
    // Aquí deberías agregar la lógica para guardar los cambios en el backend o en el estado global.
  };

  return (
    <div>
      <h1>Perfil del Colono</h1>
      {editing ? (
        <div>
          <h2>Editar Perfil</h2>
          <form>
            <label>
              Nombre:
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
            </label>
            <label>
              Dirección:
              <input
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
              />
            </label>
            <label>
              Estatus:
              <select
                name="estatus"
                value={formData.estatus}
                onChange={handleChange}
              >
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </label>
            <button type="button" onClick={handleSaveClick}>Guardar</button>
            <button type="button" onClick={handleCancelClick}>Cancelar</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Detalles del Colono</h2>
          <p>Nombre: {colono.nombre}</p>
          <p>Dirección: {colono.direccion}</p>
          <p>Estatus: {colono.estatus}</p>
          <h3>Historial de Pagos</h3>
          <ul>
            {colono.pagos.map((pago, index) => (
              <li key={index}>
                ${pago.monto} - {pago.fecha}
              </li>
            ))}
          </ul>
          <button onClick={handleEditClick}>Editar Perfil</button>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
