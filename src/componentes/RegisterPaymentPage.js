import React, { useState } from 'react';

function RegisterPaymentPage() {
  const [payment, setPayment] = useState({ monto: '', fecha: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayment({ ...payment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para guardar el pago (en un estado global o backend)
    console.log(payment);
  };

  return (
    <div>
      <h1>Registrar Pago</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Monto:
          <input
            type="number"
            name="monto"
            value={payment.monto}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Fecha:
          <input
            type="date"
            name="fecha"
            value={payment.fecha}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Registrar Pago</button>
      </form>
      {/* Aquí se puede incluir la lista de pagos */}
    </div>
  );
}

export default RegisterPaymentPage;
