
import React, { useState } from "react";
import axios from "axios";
import { BiRightArrow } from "react-icons/bi";

const DiseasePrediction = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await axios.post("http://localhost:5000/predictdisease", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResult(response.data.result);
      setError("");
    } catch (error) {
      console.error("Error predicting disease:", error.response?.data || error.message);
      setError("Error predicting disease. Please try again.");
    }
  };

  return (
    <div>
      {/* Disease Prediction Form */}
      <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center col-span-3">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Select Image
          </label>
          <div className="flex items-center">
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 p-3 border border-gray-300 rounded-md w-3/5"
            />
          </div>
        </div>
        <div className="col-span-3 flex justify-center mt-4">
          <button
            type="submit"
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-tl from-cyan-500 to-blue-700 cursor-pointer hover:scale-105"
          >
            Predict Disease &nbsp;
            <span className="group-hover:rotate-90  duration-300">
              <BiRightArrow size={20} />
            </span>
          </button>
        </div>
      </form>

      {error && (
        <div className="text-red-500 mt-2 text-center font-bold">{error}</div>
      )}
      {result && (
        <div className="mt-4 text-center font-bold">
          Disease Prediction: {result}
        </div>
      )}
    </div>
  );
};

export default DiseasePrediction;

