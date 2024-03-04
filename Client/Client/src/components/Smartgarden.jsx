// Smartgarden.js

import React, { useState, useEffect, useRef } from "react";
import Joyride from "react-joyride";
import CropPrediction from "./CropPrediction";
import DiseasePrediction from "./DiseasePrediction";
import FertilizerPrediction from "./FertilizerPrediction";
import axios from "axios";
const Smartgarden = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=Nagpur&appid=e792f8ca0784f2f0a0c578241f80e6f2"
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const [run, setRun] = useState(true);

  const steps = [
    {
      target: ".video",
      content: "Welcome to Bhoomi! This is the video section.",
      placement: "top",
    },
    {
      target: ".weather",
      content: "Here you can see the weather information.",
      placement: "top",
    },
    // Add more steps as needed
  ];

  useEffect(() => {
    // Start Joyride when component mounts
    setRun(true);
  }, []);
  const [showCropPrediction, setShowCropPrediction] = useState(false);
  const [showDiseasePrediction, setShowDiseasePrediction] = useState(false);
  const [showFertilizerPrediction, setShowFertilizerPrediction] =
    useState(false);

  const hideAllPredictions = () => {
    setShowCropPrediction(false);
    setShowDiseasePrediction(false);
    setShowFertilizerPrediction(false);
  };

  return (
    <div className="grid grid-cols-1 gap-4 p-4 h-screen relative">
      <Joyride
        steps={steps}
        run={run}
        continuous
        showProgress
        showSkipButton
        callback={({ action, index, status }) => {
          if (["finished", "skipped"].includes(status)) {
            setRun(false);
          }
        }}
      />
      <div className="flex flex-row m-1 h-full rounded-3xl">
        {/* Video Section */}
        <div className="video h-68 w-96 flex-1 relative">
          {/* Placeholder for video */}
          <video
            className="absolute inset-0 w-full h-full object-fill rounded-2xl"
            autoPlay
            loop
            muted
          >
            <source src="dashvideo1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 flex flex-col items-start justify-center text-white">
            <h2 className="text-5xl font-signature l mb-4 ml-9 tracking-wide">
              Sow the Seeds of Progress
            </h2>
            <div className="flex space-x-4 ml-9">
              <button className="bg-transparent hover:bg-white text-white hover:text-black py-2 px-4 border border-white rounded">
                What is Bhoomi?
              </button>
              <button className="bg-transparent hover:bg-white text-white hover:text-black py-2 px-4 border border-white rounded">
                Our Aim
              </button>
            </div>
          </div>
        </div>
        {/* Weather Section */}
        <div className="weather h-60 w-96 border-2 ml-3 flex items-center justify-center relative">
          {/* Background Photo for Weather */}
          <div
            className="absolute inset-0 bg-cover bg-center rounded-md"
            style={{ backgroundImage: `url('weatherbg.png')` }}
          ></div>

          <div className="absolute flex items-start justify-start mt-9 ml-9">
            <div className="mr-1"> {/* Weather icon placeholder */}</div>
            <br />
            <div>
              <p className="text-3xl font-bold mt-1">
                {weatherData &&
                  weatherData.weather &&
                  weatherData.weather[0].description}
              </p>
              <span className="text-xl font-bold mt-1">
                {weatherData &&
                  weatherData.main &&
                  (weatherData.main.temp - 273.15).toFixed(1)}{" "}
                °C
              </span>
              <p className="text-base">{weatherData && weatherData.name}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="  text-black  py-3 px-6 mt-3 font-mukta w-full ">
          <h3 className="text-3xl font-bold">BHOOMI FEATURES</h3>
        </div>
      <div className="flex flex-row gap-2 items-center justify-center mt-4 ">
        <div className="max-w-sm  bg-white border border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg o" src="croppredict.png" alt="" />
          </a>
          <div className="p-3">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                CROP PREDICTION
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <button
              onClick={() => {
                hideAllPredictions();
                setShowCropPrediction(!showCropPrediction);
              }}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Predict Now!
            </button>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="croppredict.png" alt="" />
          </a>
          <div className="p-3">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                FERTILIZER PREDICTION
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <button
              onClick={() => {
                hideAllPredictions();
                setShowFertilizerPrediction(!showFertilizerPrediction);
              }}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Predict Now!
            </button>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="croppredict.png" alt="" />
          </a>
          <div className="p-3">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                PLANT DISEASE PREDICTION
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <button
              onClick={() => {
                hideAllPredictions();
                setShowDiseasePrediction(!showDiseasePrediction);
              }}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Predict Now!
            </button>
          </div>
        </div>
      </div>
      

      {/* Crop Prediction Component */}
      {showCropPrediction && <CropPrediction />}

      {/* Disease Prediction Component */}
      {showDiseasePrediction && <DiseasePrediction />}

      {/* Fertilizer Prediction Component */}
      {showFertilizerPrediction && <FertilizerPrediction />}
    </div>
  );
};

export default Smartgarden;
