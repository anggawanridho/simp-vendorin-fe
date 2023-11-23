import { Metadata } from "next";
import React from "react";
import DashboardSideBar from "@/components/DashboardSideBar";

export const metadata: Metadata = {
  title: "Dashboard"
}

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-row h-screen">
      <DashboardSideBar />
      {children}
    </div>
  )
}

export default DashboardLayout;