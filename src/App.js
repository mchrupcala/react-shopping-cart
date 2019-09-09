import React, { useState } from 'react';
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
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
		console.log('Picked item is: ', item);
	};

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
