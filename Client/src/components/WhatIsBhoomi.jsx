import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import farmerAnimation from "../assets/animations/happyfarmer.json"

const WhatIsBhoomi = () => {
  const cardImages = [
    ["1.jpeg", "2.jpeg"],
    ["3.jpeg", "4.jpeg"],
    ["5.jpeg", "6.jpeg"],
  ];

  const challengeImages = [
    "soilerosion.jpg",
    "waterscarcity.jpg",
    "airpollution.jpg",
  ];


  return (
    <div className="p-0 bg-gradient-to-b from-green-100 via-green-200 to-green-400  ">
      {/* Navigation Bar */}
      <div className="bg-green-100 flex justify-between items-center mb-6 h-16 p-5 fixed w-full   ">
        {/* Left Side (Logo) */}
        <div className="flex items-center">
          <img src="logobhoomi.png" alt="Bhoomi Logo" className="h-14 w-14" />
          <h1 className="text-2xl font-bold ml-2">Bhoomi</h1>
        </div>

        {/* Right Side (Signup and Go Back to Dashboard) */}
        <div className="flex items-center">
          <a
            href="/about-us"
            className=" bg-blue-500 text-white py-2 px-4 rounded-md mr-4  hover:scale-110 duration-300 "
          >
            About Us
          </a>
          <a
            href="/dashboard"
            className="bg-blue-500 text-white py-2 px-4 rounded-md mr-4 font-bold hover:scale-110 duration-300 "
          >
            Go Back to Dashboard
          </a>
          <button
            onClick={() => (window.location.href = "/register")}
            className="bg-blue-500 text-white py-2 px-4 rounded-md  hover:scale-110 duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
      <br />
      <br /> <br />
      <br />
      {/* Explanation */}
      <h1 className="text-4xl font-bold mb-6 ml-2 flex-row">What is Bhoomi?</h1>
      <div><p className="text-lg mb-4 ml-2 ">
        Bhoomi is a revolutionary web application designed to assist farmers
        like you in making informed decisions about soil health and crop
        selection. Our goal is to empower you with the tools and knowledge
        needed to optimize your agricultural practices for sustainability and
        productivity.
      </p></div>
      <div>
      <div className="w-1/2 ml-auto">
        <Lottie
          options={{
            animationData: farmerAnimation, // Replace with actual animation data
            loop: true,
            autoplay: true,
          }}
          height={400}
          width={400}
        />
      </div>
      </div>
      
      <h2 className="text-2xl font-bold mt-8 mb-4 ml-2 ">
        How Does Bhoomi Work?
      </h2>
      <p className="text-lg mb-4 ml-2">
        Soil Nutrient Analysis: Bhoomi utilizes advanced machine learning
        algorithms to analyze soil samples and determine their nutrient
        composition. By understanding the specific nutrient levels in your soil,
        you can make informed decisions about fertilization and soil management.
        <br />
        Crop Recommendation: Based on the analysis of your soil's nutrient
        composition and other environmental factors, Bhoomi provides
        personalized recommendations for suitable crops. These recommendations
        take into account factors such as climate, soil type, and crop
        compatibility, helping you maximize yields while preserving soil health.
        <br />
        Sustainable Farming Practices: In addition to crop recommendations,
        Bhoomi offers insights into sustainable farming practices. Learn about
        crop rotation, cover cropping, and other techniques to improve soil
        fertility, reduce erosion, and minimize environmental impact.
      </p>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-9 object-fill">
        {cardImages.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${
              index === currentCardIndex ? "visible" : "hidden"
            }`}
          >
            <img
              src={card[currentImageIndex]}
              alt={`agri-image-${index + 1}`}
              className="rounded-md shadow-lg"
            />
          </div>
        ))}
      </div> */}
      {/* Card Navigation Buttons */}
      {/* <div className="flex justify-center mt-2">
        {cardImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleCardChange(index)}
            className={`mx-2 ${
              index === currentCardIndex ? "bg-blue-500" : "bg-gray-300"
            } text-white py-2 px-4 rounded-md hover:scale-110 duration-300`}
          >
            {index + 1}
          </button>
        ))}
      </div> */}
      {/* Statistics */}
      
      {/* Farmer Lottie Animation */}
      {/* <div className="w-1/2 ml-auto">
        <Lottie options={farmerOptions} height={400} width={400} />
      </div> */}
      {/* Images of Problems */}
      <h2 className="text-2xl font-bold mt-8 mb-4 ml-4">Challenges We Address</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {challengeImages.map((image, index) => (
          <div key={index} className="flex flex-col items-center m-7 ">
            <img
              src={image}
              alt={`challenge-image-${index + 1}`}
              className="rounded-md shadow-lg w-full h-full hover:scale-105 duration-300 "
            />
            <p className="text- mt-2">Challenge {index + 1}</p>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4 ml-3">Benefits for Farmers</h2>
      <p className="text-lg mb-4 ml-4">
        Bhoomi is designed with the well-being of farmers in mind, offering a
        range of benefits that positively impact their livelihoods and overall
        farming experience.
        <ul className="list-disc ml-6">
          <li className="mb-2">
            <span className="font-bold">Increased Crop Yield:</span> Bhoomi's
            intelligent insights and crop recommendations are tailored to
            optimize crop yields. Farmers can expect improved productivity and
            harvest outcomes.
          </li>

          <li className="mb-2">
            <span className="font-bold">Cost Reduction:</span> By providing
            accurate predictions and personalized recommendations, Bhoomi helps
            farmers optimize resource utilization, reducing unnecessary expenses
            on fertilizers and water.
          </li>

          <li className="mb-2">
            <span className="font-bold">Sustainable Farming Practices:</span>{" "}
            Bhoomi encourages and supports sustainable farming methods,
            contributing to the long-term health of the land and the
            environment. This ensures a more resilient and eco-friendly
            agriculture ecosystem.
          </li>

          <li className="mb-2">
            <span className="font-bold">Access to Modern Technologies:</span>{" "}
            Farmers gain access to cutting-edge technologies like machine
            learning and weather analytics through Bhoomi. This empowers them
            with valuable insights that were previously inaccessible.
          </li>

          <li className="mb-2">
            <span className="font-bold">Risk Mitigation:</span> Bhoomi's
            predictive capabilities help farmers anticipate and mitigate risks
            related to weather conditions, crop diseases, and market
            fluctuations. This enhances their ability to make informed decisions
            and safeguard their crops.
          </li>
        </ul>
      </p>
    </div>
  );
};

export default WhatIsBhoomi;
