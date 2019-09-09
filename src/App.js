import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import { ProductContext } from './contexts/ProductContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { CartContext } from './contexts/CartContext';

function App() {
	const [products] = useState(data);

	// Stretch - added useEffect to store shopping cart locally.
	const [cart, setCart] = useState(() => {
		const item = window.localStorage.getItem('user');
		return item ? JSON.parse(item) : [];
	});

	useEffect(() => {
		window.localStorage.setItem('user', JSON.stringify(cart))
	}, [cart])

	const addItem = item => {
		setCart([...cart, item]);
		console.log('Picked item is: ', item);
	};

	//Stretch - removeItem method will delete shopping cart items.
	const removeItem = item => {
		setCart([...cart].filter(num => (num.id !== item.id)));
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem}}>
				<CartContext.Provider value={{cart, removeItem}} >
					<Navigation cart={cart} />

					{/* Routes */}
					<Route
						exact
						path="/"
						component={Products}
					/>

					<Route
						path="/cart"
						component={ShoppingCart}
					/>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
