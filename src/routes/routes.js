import { createBrowserRouter } from 'react-router-dom'

import Main from '../layouts/Main';
import ErrorPage from '../pages/ErrorPage';
import Homepage from '../pages/Homepage';
import UserLogin from '../pages/UserLogin';
import UserRegister from '../pages/UserRegister';





const routes = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Homepage />,
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
