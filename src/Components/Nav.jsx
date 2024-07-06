import React, { useState } from "react";
import logo from "../assets/logo.png";
import LoginButton from "./LoginButton";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import InsideGoogleDrive from "./InsideGoogleDrive";
import Hero from "./Hero";
function Nav() {
  const [user, setUser] = useState(null);

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((err) => alert(err.message));
  };
  return (
    <>
      {user ? (
        <InsideGoogleDrive />
      ) : (
        <>
          <div className="flex items-center justify-between py-2 md:px-8">
            <div className="flex items-center h-16 gap-2 p-3 pl-6 md:w-64">
              <img className="h-9" src={logo} alt="logo" />
              <h1 className="text-3xl">Disk</h1>
            </div>

            <div className="flex items-center justify-between py-2 md:px-8">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 w-32 h-12 mr-2 text-lg font-medium bg-blue-500 hover:bg-blue-600 text-white"
                onClick={signIn}
              >
                Log In
              </button>
            </div>
            
          </div>
        </>
      )}
    </>
  );
}

export default Nav;
