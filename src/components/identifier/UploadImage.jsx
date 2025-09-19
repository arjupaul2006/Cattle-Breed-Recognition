// import React, { useRef, useState, useEffect } from "react";
// import * as tmImage from "@teachablemachine/image";

// const MODEL_URL = "/model/";


// const wikiLinks = {
//   Gir: "https://en.wikipedia.org/wiki/Gir_cattle",
//   Murrah: "https://en.wikipedia.org/wiki/Murrah_buffalo",
//   Toda: "https://buffalopedianew.cirb.res.in/toda/",
// };

// function UploadCamClassifier() {
//   const [model, setModel] = useState(null);
//   const [prediction, setPrediction] = useState("");
//   const [confidence, setConfidence] = useState("");
//   const [imageSrc, setImageSrc] = useState(null);
//   const webcamRef = useRef(null);

//   useEffect(() => {
//     const loadModel = async () => {
//       const model = await tmImage.load(
//         MODEL_URL + "model.json",
//         MODEL_URL + "metadata.json"
//       );
//       setModel(model);
//     };
//     loadModel();
//   }, []);

//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];
//     if (!file || !model) return;
//     const img = new Image();
//     img.src = URL.createObjectURL(file);
//     img.onload = async () => {
//       const predictions = await model.predict(img);
//       const topPrediction = predictions.sort(
//         (a, b) => b.probability - a.probability
//       )[0];
//       setPrediction(topPrediction.className);
//       setConfidence((topPrediction.probability * 100).toFixed(2));
//       setImageSrc(img.src);

//       // Auto open Wikipedia if confident
//       if (
//         topPrediction.probability > 0.7 &&
//         wikiLinks[topPrediction.className]
//       ) {
//         window.open(wikiLinks[topPrediction.className], "_blank");
//       }
//     };
//   };

//   const startWebcamPrediction = async () => {
//     if (!model) return;
//     const webcam = new tmImage.Webcam(300, 300, true);
//     await webcam.setup();
//     await webcam.play();
//     webcamRef.current.innerHTML = "";
//     webcamRef.current.appendChild(webcam.canvas);

//     setInterval(async () => {
//       const predictions = await model.predict(webcam.canvas);
//       const topPrediction = predictions.sort(
//         (a, b) => b.probability - a.probability
//       )[0];
//       setPrediction(topPrediction.className);
//       setConfidence((topPrediction.probability * 100).toFixed(2));

//       // Auto open Wikipedia if confident
//       if (
//         topPrediction.probability > 0.7 &&
//         wikiLinks[topPrediction.className]
//       ) {
//         window.open(wikiLinks[topPrediction.className], "_blank");
//       }
//     }, 2000);
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>Cattle Breed Classifier</h1>

//       <input type="file" onChange={handleFileChange} accept="image/*" />
//       <br />
//       <br />
//       {imageSrc && <img src={imageSrc} alt="Uploaded preview" width="300" />}

//       <div ref={webcamRef} style={{ marginTop: "20px" }}></div>

//       <br />
//       <button onClick={startWebcamPrediction}>Start Live Camera</button>

//       {prediction && (
//         <>
//           <h2>Prediction: {prediction}</h2>
//           <h3>Confidence: {confidence}%</h3>
//           {wikiLinks[prediction] && (
//             <a
//               href={wikiLinks[prediction]}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Open Wikipedia
//             </a>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// export default UploadCamClassifier;

import React, { useRef, useState, useEffect } from "react";
import * as tmImage from "@teachablemachine/image";

const MODEL_URL = "/model/";

const wikiLinks = {
  Gir: "https://en.wikipedia.org/wiki/Gir_cattle",
  Murrah: "https://en.wikipedia.org/wiki/Murrah_buffalo",
  Toda: "https://buffalopedianew.cirb.res.in/toda/",
};

function UploadCamClassifier() {
  const [model, setModel] = useState(null);
  const [mode, setMode] = useState("camera"); // "camera" | "upload"
  const [imageSrc, setImageSrc] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [confidence, setConfidence] = useState("");
  const [capturedImage, setCapturedImage] = useState(null);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

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

  // Auto start webcam when mode = "camera"
  useEffect(() => {
    if (mode === "camera") {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.error("Camera access denied:", err);
        });
    } else {
      // Stop webcam when switching to upload
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
    }
  }, [mode]);

  // Capture snapshot
  const capturePhoto = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, 300, 300);
    const imageData = canvasRef.current.toDataURL("image/png");
    setCapturedImage(imageData);
    setPrediction("");
    setConfidence("");
  };

  // Process (predict) on captured or uploaded image
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

  // File upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const imgUrl = URL.createObjectURL(file);
    setImageSrc(imgUrl);
    setCapturedImage(null);
    setPrediction("");
    setConfidence("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Cattle Breed Classifier</h1>

      {/* Toggle between camera and upload */}
      <button
        onClick={() => {
          setMode(mode === "camera" ? "upload" : "camera");
          setCapturedImage(null);
          setImageSrc(null);
          setPrediction("");
          setConfidence("");
        }}
        style={{ marginBottom: "15px" }}
      >
        Switch to {mode === "camera" ? "Upload" : "Camera"}
      </button>

      {mode === "camera" ? (
        <div>
          {!capturedImage ? (
            <>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                width="300"
                height="300"
                style={{ border: "1px solid black" }}
              />
              <br />
              <button onClick={capturePhoto}>Capture</button>
            </>
          ) : (
            <>
              <img
                src={capturedImage}
                alt="Captured"
                width="300"
                style={{ border: "1px solid black" }}
              />
              <br />
              <button onClick={processImage}>Process Image</button>
              <br />
              <button onClick={() => setCapturedImage(null)}>Retake</button>
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
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <br />
          {imageSrc && (
            <>
              <img
                src={imageSrc}
                alt="Uploaded preview"
                width="300"
                style={{ border: "1px solid black" }}
              />
              <br />
              <button onClick={processImage}>Process Image</button>
            </>
          )}
        </div>
      )}

      {prediction && (
        <div style={{ marginTop: "20px" }}>
          <h2>Prediction: {prediction}</h2>
          <h3>Confidence: {confidence}%</h3>
          {wikiLinks[prediction] && (
            <a
              href={wikiLinks[prediction]}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Wikipedia
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default UploadCamClassifier;

