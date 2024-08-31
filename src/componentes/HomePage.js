import React, { useState } from 'react';
import ColonoForm from './colonoForm';
import PaymentForm from './PaymentForm';
import ColonoList from './ColonoList';
import PaymentList from './PaymentList';

function HomePage({ colonos, onAddColono }) {
  const [pagos, setPagos] = useState([]);

  const addPayment = (pago) => {
    setPagos([...pagos, pago]);
  };

  return (
    <div>
      <h1>Bienvenido a Residencial Los Robles</h1>
      <ColonoForm onAddColono={onAddColono} />
      <ColonoList colonos={colonos} />
      <PaymentForm onAddPayment={addPayment} />
      <PaymentList pagos={pagos} />
    </div>
  );
}

export default HomePage;

