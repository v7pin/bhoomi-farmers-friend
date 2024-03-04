

import React from "react";
import SideBar from "./SideBar.jsx";
import TopBar from "./TopBar";
import SmartGarden from "./Smartgarden.jsx";
import Chatbot2 from "./Chatbot2.jsx";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      
      <SideBar />

      <div className="flex-1 flex flex-col ">
        
        <TopBar />

        
        <SmartGarden  />

        {/* <Chatbot2/> */}
      </div>
    </div>
  );
};

export default Dashboard;
