import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="  text-[18px] py-4 bg-slate-900 text-white font-bold">
      <nav className="flex justify-around">
        <div>
          <Link className="px-4" to="/">
            Home
          </Link>
          <Link className="px-4" to="/products">
            Products
          </Link>
          <Link className="px-4" to="/orders">
            Orders
          </Link>
          {user?.uid ? (
            <Link to="/profile" className="px-4">
              Profile
            </Link>
          ) : (
            <>
              <Link className="px-4" to="/login">
                Login
              </Link>
              <Link className="px-4" to="/registration">
                Registration
              </Link>
            </>
          )}
        </div>
        <div>
          <h1>{user?.displayName}</h1>
        </div>
      </nav>
    </div>
  );
};

export default Header;
