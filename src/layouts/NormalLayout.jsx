import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const NormalLayout = () => {
  return (
    <div className="bg-background flex flex-col overflow-hidden h-screen w-screen bg-scroll">
      <NavBar />
      <div className="w-full h-full flex overflow-y-scroll">
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  );
};

export default NormalLayout;
