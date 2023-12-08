import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';


// custom Import
import './App.css';
import routes from './routes/routes';

const App = () => {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={ routes }>
      </RouterProvider>
    </>
  )
}

export default App;
