import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const increaseQty = (id) => {
    setCart(
      cart.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map(item =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const discount = total * 0.1;
  const finalPrice = total - discount;

  return (
    <div className="pt-20 pb-20 p-4 max-w-5xl mx-auto">
      
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-gray-700 text-white px-3 py-1 rounded"
      >
        Close Cart
      </button>

      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 && (
        <p className="text-center text-gray-500">Cart is empty</p>
      )}

      {cart.map(item => (
        <div
          key={item.id}
          className="flex items-center gap-4 border p-4 mb-3 rounded"
        >
          {/* PRODUCT IMAGE */}
          <img
            src={item.image}
            alt={item.title}
            className="h-20 w-20 object-contain"
          />

          {/* PRODUCT INFO */}
          <div className="flex-1">
            <h3 className="font-semibold">{item.title}</h3>
            <p>₹ {item.price}</p>
          </div>

          {/* QUANTITY CONTROLS */}
          <div className="flex items-center">
            <button
              onClick={() => decreaseQty(item.id)}
              className="px-3 py-1 bg-gray-300"
            >
              −
            </button>

            <span className="px-4">{item.qty}</span>

            <button
              onClick={() => increaseQty(item.id)}
              className="px-3 py-1 bg-gray-300"
            >
              +
            </button>
          </div>

          {/* ITEM TOTAL */}
          <p className="w-24 text-right font-semibold">
            ₹ {(item.price * item.qty).toFixed(2)}
          </p>

          {/* REMOVE */}
          <button
            onClick={() => removeItem(item.id)}
            className="text-red-600 font-semibold"
          >
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <hr className="my-4" />
          <p>Total: ₹ {total.toFixed(2)}</p>
          <p>Discount (10%): ₹ {discount.toFixed(2)}</p>
          <h3 className="text-xl font-bold">
            Final Price: ₹ {finalPrice.toFixed(2)}
          </h3>
        </>
      )}
    </div>
  );
};

export default Cart;
