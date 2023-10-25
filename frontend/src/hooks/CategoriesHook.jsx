import { useEffect } from 'react';
import { useState } from 'react'

const CategoriesHook = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		async function getCategories() {
			const response = await fetch('http://localhost:8000/categories/');
			const categories = await response.json();
			setCategories(categories);
		}
		getCategories();
	}, []);

	return [categories]
}

export default CategoriesHook