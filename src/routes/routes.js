import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage';
import Homepage from '../pages/Homepage';
import UserLogin from '../pages/UserLogin';
import UserRegister from '../pages/UserRegister';
import Destinations from '../pages/Destinations';
import DashboardLayout from '../layouts/DashboardLayout';





const routes = createBrowserRouter([
	{
		path: '/',
		element: <DashboardLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Homepage />,
			},
			{
				path: '/destinations',
				element: <Destinations />
			},
			{
				path: '/login',
				element: <UserLogin />,
			},
			{
				path: '/register',
				element: <UserRegister />,
			},
		],
	},
])

export default routes
