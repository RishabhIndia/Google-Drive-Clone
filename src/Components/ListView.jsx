import React from "react";

function ListView() {
  return (
    <>
      <div className="sticky top-0 z-10 pt-4 pb-2 mb-2 bg-white dark:bg-dashboard-dark">
        <div className="flex justify-between">
          <h1 className="text-2xl">Home</h1>
          <div className="flex items-center justify-center w-32 overflow-hidden border rounded-full cursor-pointer border-zinc-500">
            <span className="w-full h-full bg-blue-200 bg-opacity-0 flex items-center">
              <MenuIcon className="lucide lucide-align-justify h-full mx-auto scale-75" />
            </span>
            <span className="w-full h-full bg-blue-200 bg-opacity-40 flex items-center">
              <GridViewIcon
                onClick={Clickgrid}
                className="lucide lucide-align-justify h-full mx-auto scale-75"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="justify-between hidden px-4 mt-8 text-sm sm:flex">
        <p className="w-1/2">File Name</p>
        <p className="w-24">Size</p>
        <p>Last Modified</p>
      </div>
    </>
  );
}

export default ListView;
