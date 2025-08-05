import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage';
import UserLogin from '../pages/UserLogin';
import UserRegister from '../pages/UserRegister';
import Destinations from '../pages/Destinations';

import AllPackages from '../pages/AllPackages';
import Users from '../pages/Users';
import Reviews from '../pages/Reviews';
import Admin from '../pages/Admin';
import Root from '../layouts/Root';

import Home from '../pages/Home'

import AddDestination from '../pages/AddDestination'




const routes = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/packages',
				element: <AllPackages />
			},
			{
				path: '/all-packages',
				element: <AllPackages />
			},
			{
				path: '/destinations',
				element: <Destinations />
			},
			{
				path: '/destination/add',
				element: <AddDestination />
			},
			{
				path: '/users',
				element: <Users />
			},
			{
				path: '/reviews',
				element: <Reviews />
			},
			{
				path: '/admin',
				element: <Admin />
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
