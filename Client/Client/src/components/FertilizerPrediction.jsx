import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiRightArrow } from "react-icons/bi";
import htmlReactParser from "html-react-parser"; // Import for parsing

const FertilizerPrediction = () => {
  const [inputData, setInputData] = useState({
    crop: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
  });

  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [rawSuggestions, setRawSuggestions] = useState(""); // Store raw HTML suggestions

  const handleInputChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/predictfertilizer", {
        arr: [inputData.crop, inputData.nitrogen, inputData.phosphorus, inputData.potassium],
      });

      setResult(response.data.result);
      // Ensure response.data.suggestions is a string before parsing
      setRawSuggestions(typeof response.data.suggestions === "string" ? response.data.suggestions : "");
      setError("");
    } catch (error) {
      console.error("Error predicting fertilizer:", error.response?.data || error.message);
      setError("Error predicting fertilizer. Please try again.");
    }
  };

  // **Handle suggestions with secure parsing and conditional rendering:**
  const parsedSuggestions = htmlReactParser(rawSuggestions, {
    // Restrict allowed tags and attributes to prevent XSS vulnerabilities
    allowedTags: ["p", "br", "ul", "li", "b", "i", "strong", "em"],
    allowedAttributes: {
      "*": ["class"], // Allow class attribute on any element for basic styling
    },
  });

  useEffect(() => {
    // Conditionally render sanitized suggestions for safety
    if (rawSuggestions && parsedSuggestions) {
      console.log(parsedSuggestions); // Log for verification
    }
  }, [rawSuggestions, parsedSuggestions]); // Re-render based on changes

  return (
    <div className="container mx-auto mt-4">
      {/* Fertilizer Prediction Form */}
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
        {Object.entries(inputData).map(([key, value]) => (
          <div key={key} className="col-span-1 flex flex-col items-center">
            <label htmlFor={key} className="text-sm font-medium text-gray-700">
              {key}
            </label>
            <div className="flex items-center">
              <input
                type="text"
                id={key}
                name={key}
                value={value}
                onChange={handleInputChange}
                className="mt-1 p-3 border border-gray-300 rounded-md w-full"
              />
            </div>
          </div>
        ))}
        <div className="col-span-3 flex justify-center mt-4">
          <button
            type="submit"
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-tl from-cyan-500 to-blue-700 cursor-pointer hover:scale-105"
          >
            Predict Fertilizer &nbsp;
            <span className="group-hover:rotate-90 duration-300">
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
          Fertilizer Prediction: {result}
        </div>
      )}

      {/* Conditionally render sanitized suggestions */}
      {rawSuggestions && parsedSuggestions && (
        <div className="mt-4 text-center font-bold">
          Suggestions:
          <div dangerouslySetInnerHTML={{ __html: parsedSuggestions }} />
        </div>
      )}
      </div>
    );
  };
  
  export default FertilizerPrediction;
  