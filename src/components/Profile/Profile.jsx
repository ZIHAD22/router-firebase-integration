import React from "react";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Profile = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const handleSingOut = (e) => {
    e.preventDefault();
    signOut(auth);
  };
  return (
    <div className="w-1/3 mx-auto shadow-lg mt-6 p-5">
      <img src={user.photoURL} className="rounded-[50%] mx-auto w-1/3" alt="" />
      <h1 className="text-2xl mt-5">Name: {user.displayName}</h1>
      <h2 className="text-xl mt-1">Email: {user.email}</h2>
      <button
        onClick={handleSingOut}
        className="bg-orange-300 px-10 py-1 rounded-md mt-2"
      >
        Log Out
      </button>
    </div>
  );
};

export default Profile;
