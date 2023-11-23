import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard"
}

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      {children}
    </>
  )
}

export default DashboardLayout;