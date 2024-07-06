import React from 'react'
import SideBar from './SideBar'
import ViewCenter from './ViewCenter'

function InsideGoogleDrive() {
  return (
   <>
    <div className='flex min-h-screen font-medium dark:bg-content-bg-dark bg-content-bg text-zinc-950 font-geist dark:text-icons-color-dark'>
    <SideBar/>
    <ViewCenter/>
    </div>
   </>
  )
}

export default InsideGoogleDrive
