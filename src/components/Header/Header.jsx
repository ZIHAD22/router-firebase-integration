import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="  text-[18px] py-4 bg-slate-900 text-white font-bold">
      <nav className=" w-1/5  mx-auto flex justify-between">
        <Link className="px-4" to="/">
          Home
        </Link>
        <Link className="px-4" to="/products">
          Products
        </Link>
        <Link className="px-4" to="/orders">
          Orders
        </Link>
        <Link className="px-4" to="/login">
          Login
        </Link>
        <Link className="px-4" to="/registration">
          Registration
        </Link>
      </nav>
    </div>
  );
};

export default Header;
