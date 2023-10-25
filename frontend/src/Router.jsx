import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';

import MainLayout from './layouts/MainLayout';
import NotFound from './NotFound';
import Home from './modules/home/Home';
import Login from './modules/auth/Login';
import Register from './modules/auth/Register';
import Contact from './modules/contact/Contact';
import Products from './modules/products/Products';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <NotFound />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'register',
				element: <Register />,
			},
			{
				path: 'contact',
				element: <Contact />,
			},
			{
				path: 'products',
				element: <Products />,
			}
		],
	}
]);

const Router = () => {
	return <RouterProvider router={router} />;
}

export default Router;