import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="bg-pink-200 fixed w-full z-20 top-0 border-b border-pink-300">
      <div className="max-w-7xl flex items-center justify-between mx-auto p-4">

        <Link to="/" className="text-xl font-extrabold text-purple-950">
          Shopsy !
        </Link>

        <button
          onClick={() => navigate("/cart")}
          className="bg-purple-700 text-white px-4 py-1 rounded-lg"
        >
          Cart ({totalQty})
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
