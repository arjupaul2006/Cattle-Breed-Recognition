import React from "react";
import { FaDatabase } from "react-icons/fa";

const Browsercard = () => {
  return (
    <div className="container mx-auto px-4 mt-8 mb-20">
      <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-xl shadow-inner max-w-2xl mx-auto">
        <FaDatabase size={30}/>

        {/* The main input field. It's not a real search bar, but a placeholder for a future upload/input area. */}
        <div className="flex-1 w-full sm:w-auto p-4 text-center text-gray-700 font-medium text-xl">
          Browse Breed Database
        </div>

        <div className="flex-1 w-full sm:w-auto p-4 text-center text-gray-500 font-medium">
          Explore Indian cattle and buffalo breeds
        </div>

        {/* The "Start Identification" button */}
        <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white rounded-md py-3 px-8 mt-4 sm:mt-0 hover:bg-blue-700 transition duration-300">
            <FaDatabase />
          <span>Browse Breed Database</span>
        </button>
      </div>
    </div>
  );
};

export default Browsercard;
