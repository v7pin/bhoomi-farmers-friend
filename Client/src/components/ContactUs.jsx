import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaRegComment } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-green-100 via-green-200 to-green-400 text-black"
    >
      <div className="bg-green-100 flex justify-between items-center mb-6 h-16 p-5 fixed w-full">
        {/* Left Side (Logo) */}
        <div className="flex items-center">
          <img src="logobhoomi.png" alt="Bhoomi Logo" className="h-14 w-14" />
          <h1 className="text-2xl font-bold ml-2">Bhoomi</h1>
        </div>

        {/* Right Side (Signup and Go Back to Dashboard) */}
        <div className="flex items-center space-x-4">
          <a
            href="/"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:scale-110 duration-300"
          >
            Login
          </a>
          <a
            href="/dashboard"
            className="bg-blue-500 text-white py-2 px-4 rounded-md font-bold hover:scale-110 duration-300"
          >
          
            Go Back to Dashboard
          </a>
          <button
            onClick={() => (window.location.href = "/register")}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:scale-110 duration-300"
          >
            
            Sign Up
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="max-w-md p-8  rounded-md shadow-2xl">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl mb-4">Submit the form below to get in touch with us about Bhoomi</p>

          <form
            action="https://getform.io/f/13a36658-67e4-4237-b8a5-2858ae8a035a"
            method="post"
            className="flex flex-col"
          >
            <div className="flex items-center mb-4">
              <FaUser className="text-xl mr-2" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="flex-1 p-2 bg-transparent border-2 rounded-md text-black font-bold focus:outline-none border-black placeholder-gray-600 text-xl"
              />
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-xl mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="flex-1 p-2 bg-transparent border-2 rounded-md text-black font-bold focus:outline-none border-black placeholder-gray-600 text-xl"
              />
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-xl mr-2" />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                className="flex-1 p-2 bg-transparent border-2 rounded-md text-black font-bold focus:outline-none border-black placeholder-gray-600 text-xl"
              />
            </div>
            <div className="flex items-center mb-4">
              <FaRegComment className="text-xl mr-2" />
              <textarea
                name="message"
                cols="30"
                rows="5"
                className="flex-1 p-2 bg-transparent border-2 rounded-md text-black font-bold focus:outline-none border-black placeholder-gray-600 text-xl"
                placeholder="How can we assist you with Bhoomi?"
              ></textarea>
            </div>
            <button className="text-white bg-gradient-to-b from-gray-800 to-gray-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md font-bold hover:scale-110 duration-300 text-xl">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
