import { Metadata } from "next";
import React from "react";
import DashboardSideBar from "@/components/DashboardSideBar";
import DashboardNavbar from "@/components/DashboardNavbar";

export const metadata: Metadata = {
  title: "Dashboard"
}

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-row h-screen">
      <DashboardSideBar />
      <div className="flex-grow">
        <DashboardNavbar />
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout;