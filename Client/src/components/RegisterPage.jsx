  import React from "react";
  import { Link } from "react-router-dom";
  import { MdEmail } from "react-icons/md";
  import { FaUserShield } from "react-icons/fa";
  import { BsShieldFillExclamation } from "react-icons/bs";
  import { AiOutlineSwapRight } from "react-icons/ai";

  const RegisterPage = () => {
    return (
      <div className="h-screen flex items-center justify-center ">
        <video autoPlay  loop id="bgvideo" className="w-full h-full object-cover absolute top-0 left-0 z-0">
        <source src="bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div className="loginPage flex overflow-hidden bg-white rounded-lg shadow-md opacity-90">
          


          {/* Right Registration Form Section */}
          <div className="w-1/2 h-max p-12">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <img src="logobhoomi.png" alt="logo" className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-bold">Welcome Back!</h3>
            </div>

            <form action="" className="form grid gap-4">
              <div className="p-1">
                <label
                  htmlFor="email"
                  className="text-gray-700 font-semibold mb-1"
                >
                  Email
                </label>
                <div className="input flex p-2 items-center border rounded-md border-gray-300 mt-2">
                  <MdEmail className="mr-3 text-xl text-gray-400" />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter Email"
                    className="outline-none focus:outline-none flex-1"
                  />
                </div>
              </div>

              <div className="p-1">
                <label
                  htmlFor="username"
                  className="text-gray-700 font-semibold mb-1"
                >
                  UserName
                </label>
                <div className="input flex p-2 items-center border rounded-md border-gray-300 mt-2">
                  <FaUserShield className="mr-3 text-xl text-gray-400" />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter Username"
                    className="outline-none focus:outline-none flex-1"
                  />
                </div>
              </div>

              <div className="">
                <label htmlFor="password" className="text-gray-700 font-semibold">
                  Password
                </label>
                <div className="input flex p-2 items-center border rounded-md border-gray-300 mt-2">
                  <BsShieldFillExclamation className="mr-3 text-xl text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    className="outline-none focus:outline-none flex-1"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center h-10 bg-green-400 hover:bg-green-200 text-black rounded-xl mt-4"
              >
                <span>Login</span>
                <AiOutlineSwapRight className="ml-2 mr-5" />
              </button>

              
            </form>
          </div>
          {/* Left Video Section */}
          <div className="w-96 relative overflow-hidden rounded-lg">
            <img
              src="soilimage.png"
              alt="soil"
              className="blur-sm min-w-14 h-full object-cover rounded-lg"
            />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <h2 className="text-4xl font-yatra  mb-2">जन्मभूमि से जुड़े रहे </h2>
              
            </div>

            <div className="flex flex-row justify-between items-center absolute bottom-0 left-0 right-0 mb-4 mx-4 bg-slate-300 bg-opacity-20 rounded-lg mr-5">
              <span className="text-sm flex-nowrap text-white  p-4 rounded-lg font-raleway">
                Have any account?
              </span>
              <Link to={"/"}>
                <button className="w-24 h-9 bg-green-500 hover:bg-green-600 opacity-80 rounded-lg mr-2 font-raleway">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default RegisterPage;
