// Smartgarden.js

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import CropDetails from "./CropDetails";
import nitrogenIcon from "../assets/InputIcons/nitrogen.png";
import phosphorusIcon from "../assets/InputIcons/phosphorus.png";
import potassiumIcon from "../assets/InputIcons/potassium.png";
import temperatureIcon from "../assets/InputIcons/high-temperature.png";
import humidityIcon from "../assets/InputIcons/humidity.png";
import phIcon from "../assets/InputIcons/scale.png";
import rainfallIcon from "../assets/InputIcons/downpour.png";
import Joyride from "react-joyride";
import { BiRightArrow } from "react-icons/bi";

import muskmelonImg from "../assets/cropImgs/muskmelon.jpg";
import riceImg from "../assets/cropImgs/rice.jpg";
import maizeImg from "../assets/cropImgs/maize.jpg";
import chickpeaImg from "../assets/cropImgs/chickpea.jpg";
import kidneybeanImg from "../assets/cropImgs/kidneybean.jpg";
import pigeonpeaImg from "../assets/cropImgs/pigeonpea.jpg";
import mothbeanImg from "../assets/cropImgs/mothbeans.jpg";
import mungbeanImg from "../assets/cropImgs/mungbean.jpg";
import blackgramImg from "../assets/cropImgs/blackgram.jpg";
import lentilImg from "../assets/cropImgs/lentil.jpg";
import pomegranateImg from "../assets/cropImgs/pomegranate.jpg";
import bananaImg from "../assets/cropImgs/banana.jpg";
import mangoImg from "../assets/cropImgs/mango.jpg";
import grapesImg from "../assets/cropImgs/grapes.jpg";
import watermelonImg from "../assets/cropImgs/watermelon.jpg";
import appleImg from "../assets/cropImgs/apple.jpg";
import orangeImg from "../assets/cropImgs/orange.jpg";
import papayaImg from "../assets/cropImgs/papaya.jpg";
import coconutImg from "../assets/cropImgs/coconut.jpg";
import cottonImg from "../assets/cropImgs/cotton.jpg";
import juteImg from "../assets/cropImgs/jute.jpg";
import coffeeImg from "../assets/cropImgs/coffee.jpg";

const cropImages = {
  rice: riceImg,
  maize: maizeImg,
  chickpea: chickpeaImg,
  kidneybeans: kidneybeanImg,
  pigeonpeas: pigeonpeaImg,
  mothbeans: mothbeanImg,
  mungbean: mungbeanImg,
  blackgram: blackgramImg,
  lentil: lentilImg,
  pomegranate: pomegranateImg,
  banana: bananaImg,
  mango: mangoImg,
  grapes: grapesImg,
  watermelon: watermelonImg,
  muskmelon: muskmelonImg,
  apple: appleImg,
  orange: orangeImg,
  papaya: papayaImg,
  coconut: coconutImg,
  cotton: cottonImg,
  jute: juteImg,
  coffee: coffeeImg,
};

const Smartgarden = () => {
  const [inputData, setInputData] = useState({
    N: "",
    P: "",
    K: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const [cropPrediction, setCropPrediction] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const displayPredictionRef = useRef(null);

  const handleInputChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any input field is empty
    if (Object.values(inputData).some((value) => value === "")) {
      setError("Please fill in all the input fields.");
      return;
    }

    const inputArray = Object.values(inputData).map(Number);

    try {
      const response = await axios.post("http://localhost:5000/recommend", {
        data: inputArray,
      });

      setCropPrediction(response.data.prediction);
      setError(""); // Clear any previous error

      // Check if the ref is not null before using scrollIntoView
      displayPredictionRef.current &&
        displayPredictionRef.current.scrollIntoView({
          behavior: "smooth",
        });
    } catch (error) {
      console.error("Error predicting crop:", error);
      setError("Error predicting crop. Please try again.");
    }
  };

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

  const iconPaths = {
    N: nitrogenIcon,
    P: phosphorusIcon,
    K: potassiumIcon,
    temperature: temperatureIcon,
    humidity: humidityIcon,
    ph: phIcon,
    rainfall: rainfallIcon,
  };

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
    {
      target: "form",
      content: "Fill in the details for crop prediction.",
      placement: "top",
    },
    {
      target: 'button[type="submit"]',
      content: "Click here to predict the crop.",
      placement: "top",
    },
    {
      target: ".sideBarCard", // Target the first help link in the sidebar
      content: "Any Problem? Do let us know",
      placement: "left",
    },
    // Add more steps as needed
  ];

  useEffect(() => {
    // Start Joyride when component mounts
    setRun(true);
  }, []);

  

  return (
    <div className="grid grid-cols-1 gap-8 p-8 overflow-y-auto h-screen relative">
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
      <div className="flex flex-row m-2 h-full rounded-3xl">
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

          <div className="absolute inset-0 flex items-start justify-start mt-9 ml-9">
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

      {/* Crop Prediction Form */}
      {/* <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-3 gap-4">
        {Object.entries(inputData).map(([key, value]) => (
          <div key={key} className="flex flex-col items-center">
            <label
              htmlFor={key}
              className="block text-sm font-medium text-gray-700"
            >
              {key}
            </label>
            <div className="flex items-center">
              <img
                src={iconPaths[key]}
                alt={`${key} icon`}
                className="w-14 h-14 mr-2"
              />
              <input
                type="text"
                id={key}
                name={key}
                value={value}
                onChange={handleInputChange}
                className="mt-1 p-3  border border-gray-300 rounded-md w-3/5"
              />
            </div>
          </div>
        ))}
        <div className="col-span-3 flex justify-center mt-4">
          <button
            type="submit"
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-tl from-cyan-500 to-blue-700 cursor-pointer hover:scale-105"
          >
            Predict Crop &nbsp;
            <span className="group-hover:rotate-90  duration-300">
              <BiRightArrow size={20} />
            </span>
          </button>
        </div>
      </form> */}
{/* 
      {error && (
        <div className="text-red-500 mt-2 text-center font-bold">{error}</div>
      )}
      {cropPrediction && (
        <div
          ref={displayPredictionRef}
          id="displayPrediction"
          className="mt-4 text-center font-bold text-2xl font-raleway flex flex-col justify-center items-center"
        >
          Crop Prediction: {cropPrediction}

          {cropImages[cropPrediction] && (
            <img
              src={cropImages[cropPrediction]}
              alt={`${cropPrediction} crop`}
              className="mt-4 rounded-xl h-80 w-72 hover:scale-105 shadow-xl "
            />
          )}
          <CropDetails cropName={cropPrediction} />
        </div>
      )} */}

<div className="flex flex-row gap- items-center justify-center">
      

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>



<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>



<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>




</div>

    
    </div>
  );
};  

export default Smartgarden;
