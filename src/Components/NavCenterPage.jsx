import React from "react";
import { FiSearch } from "react-icons/fi";
import { GrSort } from "react-icons/gr";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { MdOutlineSettings } from "react-icons/md";
import { Avatar } from "@mui/material";

function NavCenterPage() {
  return (
    <>
      <div className="w-screen md:w-[calc(100vw-12rem)] lg:w-[calc(100vw-16rem)]">
        <div className="flex items-center justify-between w-full gap-2 p-3 md:h-16">
          <div className="hidden bg-search-bg dark:bg-search-bg-dark py-3 px-4 rounded-full text-icons-color-light w-[720px] min-w-12 items-center md:flex dark:text-icons-color-dark">
            <FiSearch style={{ width: '23px', height: '23px' }} />
            <input
              type="text"
              placeholder="Search in Drive"
              className="pl-4 bg-transparent outline-none w-96 placeholder-zinc-500 dark:placeholder-blue-50 dark:placeholder-opacity-60"
            />
            <button  classsName="ml-auto"><GrSort style={{ width: '23px', height: '23px' }}/></button>
          </div>
          <div className="flex items-center gap-4 text-icons-color-light dark:text-icons-color-dark">
            <RxQuestionMarkCircled style={{ width: '23px', height: '23px' }}/>
            <MdOutlineSettings style={{ width: '23px', height: '23px' }}/>
            <Avatar  style={{ width: '25px', height: '27px' }}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavCenterPage;
