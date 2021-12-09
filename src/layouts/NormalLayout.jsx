import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";

const NormalLayout = () => {
  return (
    <div className="bg-background flex flex-col overflow-y-hidden h-screen w-screen bg-scroll">
      <NavBar />
      <div className="w-full h-full flex overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default NormalLayout;
