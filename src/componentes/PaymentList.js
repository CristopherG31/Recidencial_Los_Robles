import React from 'react';

function PaymentList({ pagos }) {
  return (
    <div>
      <h2>Pagos Registrados</h2>
      <ul>
        {pagos.map((pago, index) => (
          <li key={index}>
            {pago.colono} - ${pago.monto} - {pago.fecha}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaymentList;
