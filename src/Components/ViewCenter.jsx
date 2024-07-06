import React from 'react'
import NavCenterPage from './NavCenterPage'
import DataCenterPage from './DataCenterPage'

function ViewCenter() {
  return (
    <div className="flex-col">
        <NavCenterPage />
        <DataCenterPage />
    </div>
  )
}

export default ViewCenter
