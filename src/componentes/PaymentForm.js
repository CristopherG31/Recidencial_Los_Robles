import React, { useState } from 'react';

function PaymentForm({ onAddPayment }) {
  const [colono, setColono] = useState('');
  const [monto, setMonto] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoPago = { colono, monto, fecha };
    onAddPayment(nuevoPago);
    setColono('');
    setMonto('');
    setFecha('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Pago</h2>
      <input
        type="text"
        value={colono}
        onChange={(e) => setColono(e.target.value)}
        placeholder="Nombre del Colono"
        required
      />
      <input
        type="number"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
        placeholder="Monto"
        required
      />
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        required
      />
      <button type="submit">Agregar Pago</button>
    </form>
  );
}

export default PaymentForm;
