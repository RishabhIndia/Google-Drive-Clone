import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import GridViewIcon from "@mui/icons-material/GridView";
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { db } from "../firebase";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";


function DataCenterPage() {
  const [files, setFiles] = useState([])

  useEffect(() => {
    // Subscribe to Firestore collection
    // const unsubscribe = db.collection("myfiles").onSnapshot(
    //   (snapshot) => {
    //     // Update state with new data
    //     setFiles(
    //       snapshot.docs.map((doc) => ({
    //         id: doc.id,
    //         data: doc.data(),
    //       }))
    //     );
    //   },
    //   (error) => {
    //     console.error("Error fetching files: ", error); // Handle errors
    //   }
    // );
  const files = collection(db,"myFiles");
  async function getData(){
    const data = await getDocs(files);
    const filterData = data.docs.map((doc)=>({
      ...doc.data(),
      id:doc.id
    }))
    console.log(filterData);
    setFiles(filterData);
  }
  getData();

    // Cleanup the subscription on unmount
   // return () => unsubscribe();
  }, [setFiles]);

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
              <GridViewIcon className="lucide lucide-align-justify h-full mx-auto scale-75" />
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {files.map((file) => {
          return (
            <div key={file.id} className="p-2 rounded-xl bg-file-bg hover:bg-blue-100 dark:hover:bg-blue-950 bg-gray-300 overflow-hidden">
              <h2 className="flex p-2 justify-between mb-2 text-sm font-medium text-zinc-700 dark:text-slate-400">
                {/* {file.data.filename} */}
              </h2>
              <div className="flex items-center justify-center h-24 mb-1 bg-white dark:bg-slate-700 rounded-lg lg:h-32">
                <h3 className="text-3xl font-bold uppercase text-zinc-500 dark:text-slate-400">
                  JPG
                </h3>
              </div>
            </div>
          );
        })}
      </div>
      <div className="px-4 pt-2 pb-4">
        <div className="justify-between hidden px-4 mt-8 text-base sm:flex">
          <p><b>Name <ArrowDownwardOutlinedIcon/></b></p>
          <p><b>Owner</b></p>
          <p><b>Last Modified</b></p>
          <p><b>File Size</b></p>
        </div>

        <div className="justify-between hidden px-4 mt-8 text-sx sm:flex">
          <p>BioData <InsertDriveFileIcon/></p>
          <p>Arya Kumar</p>
          <p>Today</p>
          <p>1 GB</p>
        </div>
      </div>
    </>
  );
}

export default DataCenterPage;
