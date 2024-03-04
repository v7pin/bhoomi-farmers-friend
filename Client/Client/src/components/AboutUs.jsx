// AboutUs.jsx

import React from "react";
import vipinImage from "../assets/vipin1.jpeg";
import sanskarImage from "../assets/sanskar.jpeg";
import vedantImage from "../assets/vipin1.jpeg";
import vaibhavImage from "../assets/vipin1.jpeg";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="about bg-gradient-to-b from-green-100 via-green-200 to-green-400 w-full ">
      <div className="bg-green-100 flex justify-between items-center mb-6 h-16 p-5 fixed w-full   ">
        {/* Left Side (Logo) */}
        <div className="flex items-center">
          <img src="logobhoomi.png" alt="Bhoomi Logo" className="h-14 w-14" />
          <h1 className="text-2xl font-bold ml-2">Bhoomi</h1>
        </div>

        {/* Right Side (Signup and Go Back to Dashboard) */}
        <div className="flex items-center">
          <a
            href="/"
            className=" bg-blue-500 text-white py-2 px-4 rounded-md mr-4  hover:scale-110 duration-200 "
          >
            Login
          </a>
          <a
            href="/dashboard"
            className="bg-blue-500 text-white py-2 px-4 rounded-md mr-4 font-bold hover:scale-110 duration-200 "
          >
            Go Back to Dashboard
          </a>
          <button
            onClick={() => (window.location.href = "/register")}
            className="bg-blue-500 text-white py-2 px-4 rounded-md  hover:scale-110 duration-200"
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className="main p-7 flex justify-around items-center h-full">
        <div className="abt-text w-3/5 p-5">
          <h1
            className="text-red-900 mb-10 text-7xl font-extrabold font-yatra"
            style={{
              color: "#7B3F00",
              fontWeight: "normal",
              fontFamily: "revert-layer",
              WebkitTextStroke: "2px black",
              marginBottom: "40px",
            }}
          >
            About <span className="text-white">Us </span>
          </h1>
          <p className="text-black font-semibold text-xl p-3  mb-5">
          Bhoomi is a revolutionary agricultural platform dedicated to
            transforming the agricultural landscape. Our mission is to empower
            farmers with intelligent insights, sustainable farming practices,
            and crop recommendations to enhance productivity and improve
            livelihoods.
          </p>
          <p className="text-black text-xl font-semibold p-3 mb-2">
            Leveraging cutting-edge technologies such as machine learning and
            weather analytics, Bhoomi analyzes soil health, weather conditions,
            and environmental factors. By amalgamating these insights, we
            provide farmers with personalized recommendations for crop
            selection, irrigation schedules, and fertilization plans.
          </p>
        </div>

        <div>
          <div>
            <h1 className="text-black mt-24 text-2xl text-center font-extrabold font-poppins m">
              Meet the{" "}
              <span
                style={{
                  color: "#FC0050",
                  fontWeight: "bold",
                  fontFamily: "revert",
                }}
              >
                Developers
              </span>
            </h1>
          </div>
          <div className="team grid grid-cols-2  ">
            <div className="team-member text-center m-5">
              <div className="team-member-photo w-48 h-48 overflow-hidden">
                <img
                  src={vipinImage}
                  alt="Vipin Kumar"
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-base font-extrabold text-black mt-2">
                Vipin Kumar
              </h3>
              <div className="flex justify-center mt-2 items-center ">
                <a
                  href="https://www.instagram.com/vipzzzn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" mr-4 transform scale-105 hover:scale-110"
                >
                  <FaInstagram className="text-2xl text-black" />
                </a>
                <a
                  href="https://www.linkedin.com/in/v7pin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" mr-4 transform scale-105 hover:scale-110"
                >
                  <FaLinkedin className="text-2xl text-black" />
                </a>
              </div>
            </div>
            <div className="team-member text-center m-5">
              <div className="team-member-photo w-48 h-48 overflow-hidden">
                <img
                  src={sanskarImage}
                  alt="Sanskar Sawane"
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-base font-extrabold text-black mt-2">
                Sanskar Sawane
              </h3>
              <div className="flex justify-center mt-2 items-center">
                <a
                  href="https://www.instagram.com/sawane_sanskar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 transform scale-105 hover:scale-110"
                >
                  <FaInstagram className="text-2xl text-black" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sanskar-sawane-671b46224/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 transform scale-105 hover:scale-110"
                >
                  <FaLinkedin className="text-2xl text-black" />
                </a>
              </div>
            </div>
            {/* Vedant Patil */}
            <div className="team-member text-center m-5">
              <div className="team-member-photo w-48 h-48 overflow-hidden">
                <img
                  src={vedantImage}
                  alt="Vedant Patil"
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-base font-extrabold text-black mt-2">
                Vedant Patil
              </h3>
              <div className="flex justify-center mt-2 items-center">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 transform scale-105 hover:scale-110"
                >
                  <FaInstagram className="text-2xl text-black" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 transform scale-105 hover:scale-110"
                >
                  <FaLinkedin className="text-2xl text-black" />
                </a>
              </div>
            </div>
            {/* Vaibhav Nehare */}
            <div className="team-member text-center m-5">
              <div className="team-member-photo w-48 h-48 overflow-hidden">
                <img
                  src={vaibhavImage}
                  alt="Vaibhav Nehare"
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-base font-extrabold text-black mt-2">
                Vaibhav Nehare
              </h3>
              <div className="flex justify-center mt-2 items-center">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 transform scale-105 hover:scale-110"
                >
                  <FaInstagram className="text-2xl text-black" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 transform scale-105 hover:scale-110"
                >
                  <FaLinkedin className="text-2xl text-black" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
