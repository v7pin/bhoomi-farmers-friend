// CropDetails.js

import React from "react";

const CropDetails = ({ cropName }) => {


  const cropDetailsContent = {
    bestWayToGrow: "Provide optimal sunlight and water regularly.",
    bestPractice: "Use organic fertilizers for better results.",
    trendsAndCharts: "View growth trends and charts for better insights.",
    priceAndMore: "Check current market prices and more information.",
  };

  return (
    <div className="mt-8 grid grid-cols-2 gap-8">
      {/* Best Way to Grow */}
      <div className="card p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">Best Way to Grow</h3>
        <p>{cropDetailsContent.bestWayToGrow}</p>
      </div>

      {/* Best Practice for Crop */}
      <div className="card p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">Best Practice for Crop</h3>
        <p>{cropDetailsContent.bestPractice}</p>
      </div>

      {/* Trends and Charts */}
      <div className="card p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">Trends and Charts</h3>
        <p>{cropDetailsContent.trendsAndCharts}</p>
      </div>

      {/* Price and More */}
      <div className="card p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">Price and More</h3>
        <p>{cropDetailsContent.priceAndMore}</p>
      </div>
    </div>
  );
};

export default CropDetails;
