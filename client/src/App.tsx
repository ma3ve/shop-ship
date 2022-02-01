import React from 'react';
import {
  Route,
  Routes,
} from "react-router-dom";
import Layout from './components/Layout';
import Customer from './pages/Customer';
import Purchases from './pages/Purchases';
import Shipping from './pages/Shipping';

function App() {
  return (

    <div className="App">
      <Layout>
        <Routes>
          <Route path="/Customer" element={<Customer />} />
          <Route path="/Purchase" element={<Purchases />} />
          <Route path="/Shipping" element={<Shipping />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
