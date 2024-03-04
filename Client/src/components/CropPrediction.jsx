import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
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


const CropPrediction = () => {

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

  const iconPaths = {
    N: nitrogenIcon,
    P: phosphorusIcon,
    K: potassiumIcon,
    temperature: temperatureIcon,
    humidity: humidityIcon,
    ph: phIcon,
    rainfall: rainfallIcon,
  };


  return (
    <div>
            {/* Crop Prediction Form */}
        <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-3 gap-4">
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
      </form> 

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
      )} 
    </div>
  )
}

export default CropPrediction