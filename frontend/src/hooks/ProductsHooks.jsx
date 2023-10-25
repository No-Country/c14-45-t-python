import { useEffect } from 'react';
import { useState } from 'react'

const ProductsHook = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function getProducts() {
			const response = await fetch('http://localhost:8000/products/');
			const products = await response.json();
			setProducts(products);
		}
		getProducts();
	}, []);

	return [products]
}

export default ProductsHook