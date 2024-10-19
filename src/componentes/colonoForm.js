import React from 'react';

const Formulario = () => {
  return (
    <div>
      <h1>Formulario</h1>
      <form>
        <label>Nombre:</label>
        <input type="text" name="nombre" />

        <label>Dirección:</label>
        <input type="text" name="direccion" />

        <label>Teléfono:</label>
        <input type="tel" name="telefono" />

        <label>Correo Electrónico:</label>
        <input type="email" name="correo" />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
