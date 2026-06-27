const Cart = ({ cart, addToCart, removeFromCart }) => {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <h4>{item.name}</h4>

            <p>${item.price}</p>

            <div>
              <button onClick={() => removeFromCart(item)}>-</button>

              <span>{item.quantity}</span>

              <button onClick={() => addToCart(item)}>+</button>
            </div>
          </div>
        ))
      )}

      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;