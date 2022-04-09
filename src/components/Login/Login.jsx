import React from "react";
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";
import {
  useSignInWithGoogle,
  useSignInWithFacebook,
} from "react-firebase-hooks/auth";

const auth = getAuth(app);
const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [singInWithFacebook] = useSignInWithFacebook(auth);

  const handleGoogleSingIn = (e) => {
    e.preventDefault();
    signInWithGoogle();
    console.log();
  };

  const handleFacebookSingIn = (e) => {
    e.preventDefault();
    singInWithFacebook();
  };
  return (
    <div className="flex justify-center mx-auto mt-11 ">
      <form>
        <h1 className="text-3xl text-center">Please Login</h1>
        <label className="block" htmlFor="email">
          Email:
        </label>
        <input
          className="block border-2 mt-1 py-2 px-1 rounded-md w-[500px]"
          type="email"
          name=""
          id="email"
          placeholder="Enter Your Email"
        />
        <label className="block mt-4" htmlFor="email">
          Password:
        </label>
        <input
          className="border-2 w-[500px] py-2 px-1 block rounded-md mt-1"
          type="password"
          name=""
          id="password"
          placeholder="Enter Your Passwor"
        />
        <div className="text-center">
          <input
            type="submit"
            value="Login"
            className="bg-green-600 px-20 py-2 text-white font-bold rounded-md mt-4 cursor-pointer"
          />
        </div>
        <h1 className="text-center text-[20px] text-sky-900">or</h1>
        <div className="mt-2">
          <button
            onClick={handleGoogleSingIn}
            className="bg-orange-400 py-2 px-15 p-2 rounded-md text-white font-bold mx-3"
          >
            Sing With Google
          </button>
          <button
            onClick={handleFacebookSingIn}
            className="bg-sky-800 py-2 px-15 p-2 rounded-md text-white font-bold mx-3"
          >
            Sing With Facebook
          </button>
          <button
            onClick={handleGoogleSingIn}
            className="bg-gray-900 py-2 px-15 p-2 rounded-md text-white font-bold mx-3"
          >
            Sing With GitHub
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
