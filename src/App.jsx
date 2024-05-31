// src/App.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes';
import ResponsiveAppBar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ResponsiveAppBar />
        <div style={{ marginTop: '65px' }}> {/* 64px برابر با ارتفاع نوبار */}
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
