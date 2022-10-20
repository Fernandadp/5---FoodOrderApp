import CartContext from './cart-context';

const CartProvider = (props) => {
	const addItemToCartHandler = (item) => {};

	const removeItmeFromCartHandler = (id) => {};

	const cartContext = {
		items: [],
		totalAmount: 0,
		addItem: addItemToCartHandler,
		removeItem: removeItmeFromCartHandler,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
