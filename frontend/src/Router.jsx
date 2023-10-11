import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';

import NotFound from './NotFound';
import Home from './modules/home/Home';
import MainLayout from './layouts/MainLayout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <NotFound />,
		children: [
			{
				path: '',
				element: <Home />,
			}
		],
	}
]);

const Router = () => {
	return <RouterProvider router={router} />;
}

export default Router;