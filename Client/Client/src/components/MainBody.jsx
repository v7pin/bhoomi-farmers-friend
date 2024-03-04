// MainBody.jsx

import React from "react";
import { FiBarChart2, FiDroplet, FiDatabase, FiMap } from "react-icons/fi";
// Import the SmartGarden component

const MainBody = () => {
  return (
    <div className="flex mt-8 mx-4 space-x-8">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-800 p-4 rounded-md">
        {/* Sidebar Content */}
        <div className="flex flex-col space-y-4 text-white">
          <button className="flex items-center space-x-2">
            <FiBarChart2 className="text-xl" />
            <span>Dashboard</span>
          </button>

          <button className="flex items-center space-x-2">
            <FiDroplet className="text-xl" />
            <span>Water Level</span>
          </button>

          <button className="flex items-center space-x-2">
            <FiDatabase className="text-xl" />
            <span>Nutrient Levels</span>
          </button>

          <button className="flex items-center space-x-2">
            <FiMap className="text-xl" />
            <span>Soil Map</span>
          </button>

          {/* Add more sidebar options as needed */}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-4/5 bg-gray-100 p-8 rounded-md">
        {/* Dashboard Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Dashboard Overview</h2>
          {/* Add your charts, graphs, or other dashboard elements here */}
        </div>

        {/* Water Level */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Water Level</h2>
          {/* Add water level components and information here */}
        </div>

        {/* Nutrient Levels */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Nutrient Levels</h2>
          {/* Add nutrient level components and information here */}
        </div>

        {/* Soil Map */}
        <div>
          <h2 className="text-2xl font-semibold">Soil Map</h2>
          {/* Add soil map components and information here */}
        </div>

        {/* Smart Garden Component */}
       
      </div>
    </div>
  );
};

export default MainBody;
