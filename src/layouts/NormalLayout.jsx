import React from "react";
import { Outlet } from "react-router";

const NormalLayout = () => {
  return (
    <div className="bg-background h-screen w-screen bg-fixed">
      <Outlet />
    </div>
  );
};

export default NormalLayout;
