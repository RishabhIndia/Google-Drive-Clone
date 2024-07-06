import React from "react";

function GridView() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="false p-4 duration-150 rounded-xl bg-file-bg hover:bg-blue-100 dark:hover:bg-blue-950 bg-gray-300 ovrflow-hidden">
          <h2 className="flex p-6 justify-between mb-2 text-sm font-medium text-zinc-700 dark:text-slate-400">
            help.JPG
          </h2>
          <div className="flex items-center justify-center h-24 mb-1 bg-white dark:bg-slate-700 rounded-lg lg:h-32">
            <h3 className="text-3xl font-bold uppercase text-zinc-500 dark:text-slate-400">
              JPG
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default GridView;
