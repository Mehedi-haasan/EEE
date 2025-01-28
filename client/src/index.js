import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
// import store from './Redux/store';
import StoreProvider from './Redux/provider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className=''>
    <div className=''>
      <StoreProvider >
        <App />
      </StoreProvider>
    </div>
  </div>
);


reportWebVitals();
