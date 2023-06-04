
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';


function App() {
  return (
    <div>
      <ToastContainer />
      <RouterProvider router={ routes }>
      </RouterProvider>
    </div>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import DashboardLayout from './layouts/DashboardLayout';


// const HomePage = () => <h1>Home Page</h1>;
// const DashboardPage = () => <h1>Dashboard Page</h1>;
// const NotificationsPage = () => <h1>Notifications Page</h1>;
// const OrdersPage = () => <h1>Orders Page</h1>;

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Dashboard routes */ }
//         <Route path="/" element={ <DashboardLayout><HomePage /></DashboardLayout> } />
//         <Route path="/dashboard" element={ <DashboardLayout><DashboardPage /></DashboardLayout> } />
//         <Route path="/notifications" element={ <DashboardLayout><NotificationsPage /></DashboardLayout> } />
//         <Route path="/orders" element={ <DashboardLayout><OrdersPage /></DashboardLayout> } />
//         {/* Add more routes for your other pages */ }
//       </Routes>
//     </Router>
//   );
// };

// export default App;
