import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';

import NotFound from './NotFound';
import Home from './modules/home/Home';
import MainLayout from './layouts/MainLayout';
import Contact from './modules/contact/Contact';

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
				path: 'contact',
				element: <Contact />,
			}
		],
	}
]);

const Router = () => {
	return <RouterProvider router={router} />;
}

export default Router;