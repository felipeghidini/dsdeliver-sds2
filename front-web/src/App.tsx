import React from 'react';
import './App.css';
import Routes from './Routers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div>
      <>
      <Routes />
      <ToastContainer />
      </>
    </div>
  );
}

export default App;
