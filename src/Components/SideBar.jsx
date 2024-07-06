import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FiHome } from "react-icons/fi";
import { LuHardDrive } from "react-icons/lu";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { RiUserShared2Line } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { RiSpamLine } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";
import { TiCloudStorageOutline } from "react-icons/ti";
import PlusButton from "./PlusButton";

function SideBar() {
  const [File, setFile] = useState(null);
  return (
    <>
      <div className="hidden w-48 h-screen md:inline-block lg:w-64">
        <div className="flex items-center h-16 gap-2 p-3 pl-6 md:w-64">
          <img className="h-9" src={logo} alt="logo" />
          <h1 className="text-3xl">Disk</h1>
        </div>
        <PlusButton />
        <div className="grid gap-4 p-2 ml-1 text-sm">
          <div>
            <div className="flex items-center gap-2 px-4 py-2 duration-100 rounded-full cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200">
              <FiHome style={{ width: "23px", height: "23px" }} />
              <p>Home</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 duration-100 rounded-full cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200">
              <LuHardDrive style={{ width: "23px", height: "23px" }} />
              <p>My Drive</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 duration-100 rounded-full cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200">
              <HiMiniComputerDesktop
                style={{ width: "23px", height: "23px" }}
              />
              <p>Computers</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 px-4 py-2 duration-100 rounded-full cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200">
              <RiUserShared2Line style={{ width: "23px", height: "23px" }} />
              <p>Shared with me</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 duration-100 rounded-full cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200">
              <FaRegClock style={{ width: "23px", height: "23px" }} />
              <p>Recent</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 duration-100 rounded-full cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200">
              <FaRegStar style={{ width: "23px", height: "23px" }} />
              <p>Starred</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 px-4 py-2 duration-100 rounded-full cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200">
              <RiSpamLine style={{ width: "23px", height: "23px" }} />
              <p>Spam</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 duration-100 rounded-full cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200">
              <FaRegTrashAlt style={{ width: "23px", height: "23px" }} />
              <p>Trash</p>
            </div>
            <hr />
            <div className="flex items-center gap-2 px-4 py-2 duration-100 rounded-full cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200">
              <TiCloudStorageOutline
                style={{ width: "23px", height: "23px" }}
              />
              <p>Storage</p>
            </div>
          </div>
          <div className="px-5">
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-300">
                <div
                  style={{ width: "50%" }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-700"
                ></div>
              </div>
            </div>
            <br />
            <span className="block text-black-600 text-xs">
              105 GB of 200 GB used
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
