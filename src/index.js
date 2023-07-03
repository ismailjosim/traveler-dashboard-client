import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthProvider from './Contexts/AuthProvider';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  // <React.StrictMode>
  <Provider store={ store }>
    <AuthProvider>
      <QueryClientProvider client={ queryClient }>
        <ToastContainer />
        <App />
      </QueryClientProvider>
    </AuthProvider>
  </Provider>
  // </React.StrictMode>
);
