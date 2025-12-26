import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const item = cart.find(p => p.id === product.id);

    if (item) {
      setCart(
        cart.map(p =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  return (
    <div className="pt-20 pb-20">
      {/* products */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            cart={cart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
