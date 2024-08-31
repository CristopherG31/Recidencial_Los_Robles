import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componentes/Headers.js';
import Footer from './componentes/Footers.js';
import HomePage from './componentes/HomePage.js';
import ProfilePage from './componentes/ProfilePage.js';
import RegisterPaymentPage from './componentes/RegisterPaymentPage.js';

function App() {
  const [colonos, setColonos] = useState([]);

  const addColono = (colono) => {
    setColonos([...colonos, colono]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage colonos={colonos} onAddColono={addColono} />}
        />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/register-payment" element={<RegisterPaymentPage />} />
      </Routes>
      <Footer />
    </Router>
    

  );
}

export default App;
