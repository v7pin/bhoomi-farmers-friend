

import React from "react";
import SideBar from "./SideBar.jsx";
import TopBar from "./TopBar";
import SmartGarden from "./Smartgarden.jsx";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      
      <SideBar />

      <div className="flex-1 flex flex-col overflow-hidden">
        
        <TopBar />

        
        <SmartGarden />
      </div>
    </div>
  );
};

export default Dashboard;
