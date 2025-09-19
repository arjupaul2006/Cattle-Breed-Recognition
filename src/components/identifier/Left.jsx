import React, { useState } from 'react';
import { BsCamera, BsSearch, BsCheckLg, BsInfoCircle, BsXLg, BsLightbulb, BsExclamationTriangle } from 'react-icons/bs';
import { LuUpload, LuWifi } from 'react-icons/lu';
import { VscFileSubmodule } from "react-icons/vsc";


const LeftSideUI = () => {

    const [upload, setUpload] = useState(false)

    const handleCamera = () => {
        setUpload(!upload)
    }

  return (
    <div className="w-full md:w-1/3 p-6 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col">
      <div className="flex-1 flex flex-col justify-between">
        {/* Identification Progress Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Identification Progress</h2>
            <span className="text-gray-500">1/3</span>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                <BsCamera className="text-sm" />
              </div>
              <div>
                <h3 className="text-blue-500 font-semibold">Capture</h3>
                <p className="text-sm text-gray-500">Take photo of cattle</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center">
                <BsSearch className="text-sm" />
              </div>
              <div>
                <h3 className="text-gray-400 font-semibold">Analyze</h3>
                <p className="text-sm text-gray-500">AI breed identification</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center">
                <BsCheckLg className="text-sm" />
              </div>
              <div>
                <h3 className="text-gray-400 font-semibold">Confirm</h3>
                <p className="text-sm text-gray-500">Submit to BPA system</p>
              </div>
            </div>
          </div>
        </div>

        {/* New Photo Capture/Upload Section */}
        <div className="bg-gray-50 p-6 rounded-lg mb-6 shadow-sm">
          <div className="flex bg-white rounded-lg border border-gray-200 overflow-hidden mb-4">
            <button className="flex-1 flex items-center justify-center p-3 text-sm font-semibold text-gray-700 bg-gray-100 border-r border-gray-200" onClick={handleCamera}>
              <BsCamera className="mr-2" /> Camera
            </button>
            <button className="flex-1 flex items-center justify-center p-3 text-sm font-semibold text-gray-700" onClick={handleCamera}>
              <LuUpload className="mr-2" /> Upload
            </button>
          </div>
          <button className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg text-lg flex items-center justify-center hover:bg-blue-700 transition duration-200">
            <BsCamera className="mr-3" /> Capture Photo
          </button>
          <div className="flex justify-between items-center text-xs mt-3">
            <div className="flex items-center text-gray-500">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              Camera Active
            </div>
            <div className="flex items-center text-gray-500">
              <LuWifi className="mr-2" /> Connected
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-8">
          <div className="h-full bg-blue-500" style={{ width: '33%' }}></div>
        </div>

        {/* Cattle Photo Instructions Panel */}
        <div className="bg-white p-6 rounded-lg flex flex-col mt-auto border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <BsInfoCircle className="text-blue-500 text-xl mr-2" />
              <h3 className="text-lg font-bold text-gray-800">Cattle Photo Instructions</h3>
            </div>
            <BsXLg className="text-gray-500 text-lg cursor-pointer hover:text-gray-700" />
          </div>
          <p className="text-sm text-gray-600 mb-6">Follow these steps for best results</p>

          {/* Numbered Steps */}
          <div className="space-y-4 mb-6">
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">1</div>
              <p className="text-sm text-gray-700">Position the cattle in good lighting</p>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">2</div>
              <p className="text-sm text-gray-700">Ensure the animal is clearly visible</p>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">3</div>
              <p className="text-sm text-gray-700">Capture full body or clear head profile</p>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">4</div>
              <p className="text-sm text-gray-700">Keep the camera steady and focused</p>
            </div>
          </div>

          {/* Pro Tip Section */}
          <div className="bg-orange-50 p-4 rounded-lg flex items-start mb-4">
            <BsLightbulb className="text-orange-500 text-xl mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-orange-800 mb-1">Pro Tip</h4>
              <p className="text-xs text-orange-700">
                For best results, take photos during daylight hours and maintain a safe distance from the animal.
              </p>
            </div>
          </div>

          {/* Safety First Section */}
          <div className="bg-red-50 p-4 rounded-lg flex items-start">
            <BsExclamationTriangle className="text-red-500 text-xl mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-red-800 mb-1">Safety First</h4>
              <p className="text-xs text-red-700">
                Always maintain a safe distance from animals and ensure your safety while taking photos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideUI;