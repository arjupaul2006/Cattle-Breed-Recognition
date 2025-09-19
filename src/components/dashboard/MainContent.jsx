// src/components/MainContent.jsx
import React from "react";
import { Link } from "react-router-dom";

const MainContent = () => {
  return (
    <main className="flex-grow flex flex-col items-center justify-center p-8 text-center md:mt-16 mt-25">
      {/* Icon section */}
      <div className="flex space-x-4 mb-8">
        <div className="bg-gray-200 p-4 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4z" />
          </svg>
        </div>
        <div className="bg-green-600 p-4 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      </div>

      {/* Welcome text */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Welcome to Cattle Breed Recognition
      </h1>
      <p className="text-lg text-gray-600 mb-2">
        <span className="text-blue-600 font-semibold">Government of India</span>{" "}
        - Livestock Management System
      </p>
      <p className="text-base text-gray-500 max-w-xl mx-auto mb-8">
        Identify cattle and buffalo breeds using AI-powered image recognition
        technology
      </p>

      {/* System status */}
      <div className="flex items-center text-sm text-gray-500 mb-12">
        <span className="relative flex h-3 w-3 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="text-green-600 font-medium">System Online</span>
        <span className="mx-2">•</span>
        <span>Ready for Recognition</span>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 fixed bottom-0 mb-6">
        <button className="flex items-center justify-center space-x-2 border border-gray-300 rounded-md py-3 px-6 text-gray-700 hover:bg-gray-100 transition duration-300 bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" y1="22" x2="4" y2="15" />
            <line x1="12" y1="22" x2="12" y2="15" />
            <line x1="20" y1="22" x2="20" y2="15" />
          </svg>
          <span>Browse Breeds</span>
        </button>
        <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white rounded-md py-3 px-8 hover:bg-blue-700 transition duration-300">
          <Link to='/identifications'><span>Start Identification</span></Link>
          
        </button>
      </div>
    </main>
  );
};

export default MainContent;
