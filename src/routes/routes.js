import { createBrowserRouter } from 'react-router-dom'
import UserLogin from '../components/Auth/UserLogin'
import UserRegister from '../components/Auth/UserRegister'
import ErrorPage from '../components/ErrorPage/ErrorPage'
import Homepage from '../components/Home/Homepage'
import Main from '../layouts/Main'



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
