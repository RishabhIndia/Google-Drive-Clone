import React, { useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import InsideGoogleDrive from "./InsideGoogleDrive";

function LoginButton() {
 

  return (
    <>
      {/* {user ? (
        <InsideGoogleDrive />
      ) : (
        <div className="flex items-center justify-between py-2 md:px-8">
          <div className="flex items-center justify-between py-2 md:px-8">
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 w-32 h-12 mr-2 text-lg font-medium bg-blue-500 hover:bg-blue-600 text-white"
              onClick={signIn}
            >
              Log In
            </button>
          </div>
        </div>
      )} */}
    </>
  );
}

export default LoginButton;
