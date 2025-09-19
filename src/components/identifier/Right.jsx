import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import * as tmImage from "@teachablemachine/image";

const MODEL_URL = "/model/";

const wikiLinks = {
  Gir: "https://en.wikipedia.org/wiki/Gir_cattle",
  Murrah: "https://en.wikipedia.org/wiki/Murrah_buffalo",
  Toda: "https://buffalopedianew.cirb.res.in/toda/",
};

const RightSideUI = () => {
  const [model, setModel] = useState(null);
  const [mode, setMode] = useState("camera"); // "camera" | "upload"
  const [imageSrc, setImageSrc] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [confidence, setConfidence] = useState("");
  const [capturedImage, setCapturedImage] = useState(null);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const [facingMode, setFacingMode] = useState("user"); // default: front cam

  const toggleCamera = () => {
    setFacingMode((prev) => (prev === "user" ? { exact: "environment" } : "user"));
  };

  const openFilePicker = () => {
    fileInputRef.current.click();
  };

  // Load model
  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await tmImage.load(
        MODEL_URL + "model.json",
        MODEL_URL + "metadata.json"
      );
      setModel(loadedModel);
    };
    loadModel();
  }, []);

  // Open camera automatically when in "camera" mode
  

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const imgUrl = URL.createObjectURL(file);
    setImageSrc(imgUrl);
    setCapturedImage(null);
  };

  const processImage = async () => {
    if (!model) return;
    let img = new Image();
    img.src = capturedImage || imageSrc;
    img.onload = async () => {
      const predictions = await model.predict(img);
      const topPrediction = predictions.sort(
        (a, b) => b.probability - a.probability
      )[0];
      setPrediction(topPrediction.className);
      setConfidence((topPrediction.probability * 100).toFixed(2));

      if (
        topPrediction.probability > 0.7 &&
        wikiLinks[topPrediction.className]
      ) {
        window.open(wikiLinks[topPrediction.className], "_blank");
      }
    };
  };

  return (
    <div className="flex-1 flex items-start justify-center p-6 text-center shadow">
      <div className="flex flex-col items-center justify-center p-9 rounded-2xl max-h-[100%]">
        {/* Toggle button */}
        <button
          className="mb-4 bg-blue-500 text-white px-3 py-1 rounded"
          onClick={() => setMode(mode === "camera" ? "upload" : "camera")}
        >
          Switch to {mode === "camera" ? "Upload" : "Camera"}
        </button>

        {mode === "camera" ? (
          <div className="flex flex-col gap-3">
            {!capturedImage ? (
              <>
                <Webcam
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  className="w-full max-w-md h-auto object-cover rounded-xl shadow-lg"
                  videoConstraints={{
                    facingMode: facingMode,
                    width: 640,
                    height: 480,
                  }}
                />

                {/* Toggle Button */}
                <button
                  onClick={toggleCamera}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                >
                  Switch to{" "}
                  {facingMode === "user" ? "Back Camera" : "Front Camera"}
                </button>

                <button
                  onClick={capturePhoto}
                  className="mt-4 bg-red-600 text-white px-5 py-2 rounded-lg"
                >
                  Capture Photo
                </button>
              </>
            ) : (
              <>
                <img
                  src={capturedImage}
                  alt="Captured"
                  width="300"
                  className="border rounded-lg"
                />
                <br />
                <button
                  className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
                  onClick={processImage}
                >
                  Process Image
                </button>
                <br />
                <button
                  className="mt-2 bg-yellow-500 text-white px-3 py-1 rounded"
                  onClick={() => setCapturedImage(null)}
                >
                  Retake
                </button>
              </>
            )}
            <canvas
              ref={canvasRef}
              width={300}
              height={300}
              style={{ display: "none" }}
            />
          </div>
        ) : (
          <div>
            {/* Hidden file input */}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />

            {/* Custom button */}
            <button
              onClick={openFilePicker}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition "
            >
              Choose File
            </button>
            {imageSrc && (
              <>
                <img
                  src={imageSrc}
                  alt="Uploaded preview"
                  width="300"
                  className="border rounded-lg mt-2"
                />
                <br />
                <button
                  className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
                  onClick={processImage}
                >
                  Process Image
                </button>
              </>
            )}
          </div>
        )}

        {/* Processed Data */}
        {/* Prediction Result Box */}
        {prediction && (
          <div className="mt-6 w-[85%] max-w-md bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl shadow-lg transform transition-all hover:scale-105">
            <h2 className="text-2xl font-bold mb-2">Prediction Result</h2>
            <p className="text-4xl mb-4">
              <span className="font-semibold">Breed:</span> {prediction}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Confidence:</span> {confidence}%
            </p>

            {wikiLinks[prediction] && (
              <a
                href={wikiLinks[prediction]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition"
              >
                Learn More on Wikipedia
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RightSideUI;
