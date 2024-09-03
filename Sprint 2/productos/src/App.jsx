import './App.css';
import Layout from './Layout';
import { FilterableProductTable } from './ProductList';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductItem } from './ProductItem';
import { action as productAction, loader as productsLoader} from  './Layout';
import { ProductForm } from './ProductForm';
import {loader as productLoader} from './ProductItem';
import {action as formAction} from './ProductForm';

async function productsExternalLoader() {
	let res = await fetch('https://dummyjson.com/products/category/smartphones');
	let data = await res.json();
	return data.products;
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		loader: productsLoader,
		action: productAction,
		children: [
			{
				path: '/products',
				loader: productsExternalLoader,
				element: <FilterableProductTable/>,
			},
			{
				path: '/contacts/:contactId',
				element: <ProductItem/>,
				loader: productLoader,
			},
			{
				path: '/contacts/:contactId/edit',
				element: <ProductForm/>,
				loader: productLoader,
				action: formAction,
			},
		]
	}
])

// Routers de ejemplo
// const router2 = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <Layout />,
// 		loader: productsLoader,
// 		action: productAction,
// 		children: [
// 			{
// 				path: '/login',
// 				loader: null,
// 				action: () => null,
// 				element: <Login/>,
// 			},
// 			{
// 				path: '/app',
// 				element: <LayoutPrincipal/>,
// 				children: [
// 					{
// 						path: '/cuentas',
// 						loader: productsExternalLoader,
// 						element: <FilterableProductTable/>,
// 					},
// 					{
// 						path: '/tarjetas',
// 						element: <ProductItem/>,
// 						loader: productLoader,
// 					},
// 					{
// 						path: '/tarjetas/:tarjetaId',
// 						element: <ProductItem/>,
// 						loader: productLoader,
// 					},
// 					{
// 						path: '/prestamos',
// 						element: <ProductForm/>,
// 						loader: productLoader,
// 						action: formAction,
// 					},
// 				]
// 			},
// 			{
// 				path: '/contacts/:contactId/edit',
// 				element: <ProductForm/>,
// 				loader: productLoader,
// 				action: formAction,
// 			},
// 		]
// 	}
// ])

// const router2 = createBrowserRouter(
// 	createRoutesFromElements(
// 		<Routes>
// 			<Route>

// 			</Route>
// 		</Routes>
// 	)
// )

function App() {
	return (
		<RouterProvider router={router}/>
	);
}

export default App;
