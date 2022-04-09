import React from "react";

const Registration = () => {
  return (
    <div className="flex justify-center mx-auto mt-11 ">
      <form>
        <h1 className="text-3xl text-center">Please Registration</h1>
        <label className="block" htmlFor="name">
          Name:
        </label>
        <input
          className="block border-2 mt-1 py-2 px-1 rounded-md w-[500px]"
          type="text"
          name=""
          id="name"
          placeholder="Enter Your Name"
        />
        <label className="block mt-4" htmlFor="email">
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
            value="Registration"
            className="bg-green-600 px-20 py-2 text-white font-bold rounded-md mt-4"
          />
        </div>
      </form>
    </div>
  );
};

export default Registration;
