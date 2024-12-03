import axios from "axios";
import React, { useState } from "react";
const App = () => {
  const [userInput, setuserInput] = useState("");
  const [qrCodeData, setQrCodeData] = useState();
  const [showQRCode, setShowQRCode] = useState(false); // To control animation visibility

  const fetchQRCode = async () => {
    try {
      const baseUrl =
        "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
      const response = `${baseUrl}${userInput}`;
      setQrCodeData(response); // Save data or process response
      setShowQRCode(false); // Reset animation
      setTimeout(() => setShowQRCode(true), 100); // Delay to trigger animation
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen text-white bg-black p-10 flex justify-center items-center">
      <div className="">
        <div className="w-[450px] bg-white p-5 rounded-md">
          <div>
            <h5 className="text-black text-xl font-bold ">
              Enter Your Text or URL
            </h5>
            <input
              type="text"
              value={userInput}
              className="border-2 text-black px-2 w-full my-5 py-2"
              placeholder="Enter URL or Text "
              onChange={(event) => setuserInput(event.target.value)}
            />
            <div className="flex justify-center py-2">
              {qrCodeData && (
                <a className={`qr-container ${showQRCode ? "fade-in" : ""}`}>
                  <img
                    src={`${qrCodeData}`}
                    alt="Generated QR Code"
                    className="border-2 p-2 border-black"
                  />
                  <a
                    href={qrCodeData} // Set the href to the QR code URL
                    download
                    className="mt-3 inline-block bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded-lg"
                  >
                    Download QR Code
                  </a>
                </a>
              )}
            </div>

            <button
              onClick={fetchQRCode}
              className="w-full bg-sky-600 mt-2 hover:bg-sky-800 duration-200 p-3 rounded-lg"
            >
              Generate QR Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
