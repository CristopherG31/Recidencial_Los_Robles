import React, { useState } from 'react';
import ColonoForm from './colonoForm';
import PaymentForm from './PaymentForm';
import ColonoList from './ColonoList';
import PaymentList from './PaymentList';
import './HomePage.css'; // Asegúrate de incluir el CSS para estilos
import residentialImage from '../assets/Maquetado de residencial  los robles.jpg';

function HomePage({ colonos, onAddColono }) {
  const [pagos, setPagos] = useState([]);

  const addPayment = (pago) => {
    setPagos([...pagos, pago]);
  };

  return (
    <div className="home-container">
      {/* Contenedor superior */}
      <div className="header-container">
        {/* Menú de hamburguesa */}
       

       

        {/* Botones de servicios y residentes */}
        <div className="button-container">
        <div className="hamburger-menu">
          <button className="hamburger-button">☰</button>
        </div>
          <button className="resident-button">SERVICIOS</button>
          <button className="resident-button">PAGOS</button>
          <h1 className="resident-button">RECIDENCIAL LOS ROBLES</h1>
          <button className="resident-button">FORMULARIO</button>
          <button className="resident-button">CONTACTO</button>
        </div>
      </div>
      <img src={residentialImage} alt="Descripción de Residencial Los Robles" />


      {/* Formulario de colonos */}
      <ColonoForm onAddColono={onAddColono} />
      <ColonoList colonos={colonos} />
      
      {/* Formulario de pagos */}
      <PaymentForm onAddPayment={addPayment} />
      <PaymentList pagos={pagos} />

      {/* Sección de contacto */}
      <form className="contact-form">
        <h2>Contacto</h2>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo electrónico" required />
        <textarea placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default HomePage;
