import React from "react";
import { FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";

const StartCard = () => {
  return (
    <div className="container mx-auto px-4 mt-8 mb-10 pt-10">
      <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-xl shadow-inner max-w-2xl mx-auto">
        <FaCamera size={29} />

        {/* The main input field. It's not a real search bar, but a placeholder for a future upload/input area. */}
        <div className="flex-1 w-full sm:w-auto p-4 text-center text-gray-700 font-medium text-xl">
          Start Breed Recognition
        </div>

        <div className="flex-1 w-full sm:w-auto p-4 text-center text-gray-500 font-medium">
          Take a photo to identify cattle breed
        </div>

        {/* The "Start Identification" button */}
        <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white rounded-md py-3 px-8 mt-4 sm:mt-0 hover:bg-blue-700 transition duration-300">
          <Link to="/identifications">
            <span>Start Identification</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default StartCard;
