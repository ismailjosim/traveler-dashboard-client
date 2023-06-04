import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthProvider from './Contexts/AuthProvider';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';




const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  // <React.StrictMode>

  <Provider store={ store }>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>

  // </React.StrictMode>
);
