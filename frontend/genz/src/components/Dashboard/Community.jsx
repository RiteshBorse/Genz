import React from 'react'
import SideBar from "../SideBar";
import DashboardNavbar from "./DashboardNavbar";
const Community = () => {
   const currentPage = "community"
  return (
    <div>
      <div className="flex">
      <div>
        <SideBar  activePage={currentPage} />
      </div>
      <div className="w-full bg-blue-100">
        <DashboardNavbar />
      </div>
    </div>
    </div>
  )
}

export default Community
