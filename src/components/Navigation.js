import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	const cart = useContext(CartContext);
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				{/* {HAD TO UPDATE THE OBJECT LENGTH HERE SINCE I ADDED THE ITEM.REMOVE METHOD.} */}
				Cart <span>{Object.keys(cart.cart).length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
