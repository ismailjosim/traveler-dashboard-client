import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthProvider from './Contexts/AuthProvider';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  // <React.StrictMode>
  <QueryClientProvider client={ queryClient }>
    <Provider store={ store }>
      <AuthProvider>
        <ToastContainer />
        <App />
      </AuthProvider>
    </Provider>
  </QueryClientProvider>
  // </React.StrictMode>
);
