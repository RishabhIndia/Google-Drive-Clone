import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import InsideGoogleDrive from "./InsideGoogleDrive";

function Home() {
  return (
    <>
      <div class="w-screen h-screen overflow-hidden font-geist">
        <Nav />
        <Hero />
        {/* <InsideGoogleDrive /> */}
      </div>
    </>
  );
}

export default Home;
