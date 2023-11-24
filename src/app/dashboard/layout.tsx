import { Metadata } from "next";
import React from "react";
import DashboardSideBar from "@/components/DashboardSideBar";
import DashboardNavbar from "@/components/DashboardNavbar";

export const metadata: Metadata = {
  title: "Dashboard"
}

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-row">
      <DashboardSideBar />
      <div className="flex flex-col h-screen w-full">
        <DashboardNavbar />
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout;