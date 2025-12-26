import React from "react";

const ProductCard = ({ product, addToCart, cart }) => {
  const isInCart = cart.find(item => item.id === product.id);

  return (
    <div className="border p-4 rounded">
      <img src={product.image} className="h-40 mx-auto" alt={product.title} />
      <h3 className="font-bold mt-2">{product.title}</h3>
      <p className="text-lg">₹ {product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="bg-green-600 text-white px-4 py-1 mt-2 rounded"
      >
        {isInCart ? "Add More" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
