import React, { useState, useEffect } from "react";
import Header from "./Header";

function Home() {
  const [addresses, setAddresses] = useState([]);
  const [address, setAddress] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    fetch("/walletAddresses.txt")
      .then((response) => response.text())
      .then((text) => {
        // Normalize newlines and trim each line to handle different OS newline characters and remove extra whitespace
        const lines = text.replace(/\r\n?/g, "\n").split('\n').map(line => line.trim().toLowerCase()); // Convert to lowercase for case-insensitive comparison
        setAddresses(lines);
      });
  }, []);

  function handleAddressChange(event) {
    setAddress(event.target.value.trim().toLowerCase()); // Also trim and convert input to lowercase
  }

  function handleCheckAddress() {
    const isInArray = addresses.includes(address);

    if (isInArray) {
      setResult("The address is whitelisted");
    } else {
      setResult("The address is not whitelisted");
    }
  }

  return (
    <div className="h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center max-[445px]:left-10">
        <div className="mt-44 rounded-xl border-2 border-white pb-10 pt-12 w-[500px] shadow-lg shadow-white bg-gradient-to-b from-[#6F492E] to-black max-[645px]:w-[400px] max-[545px]:w-[300px]">
          <div className="flex justify-center text-white items-center pb-8 text-xl font-bold">
            <p>Verify your wallet here</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <input
              type="text"
              id="address"
              value={address}
              placeholder="Write wallet here..."
              onChange={handleAddressChange}
              className="rounded-lg px-5 py-2 border-none text-black w-3/4"
            />
            <button
              type="button"
              onClick={handleCheckAddress}
              className="rounded-lg cursor-pointer bg-[#A7551C] px-6 py-2 mt-4"
            >
              Submit wallet
            </button>
          </div>

          <div className="mt-2 flex justify-center items-center pt-4">
            <p className="text-lg italic font-sans text-white">{result}</p>
          </div>
        </div>
      </div>

      <img
        className="absolute right-0 top-0 opacity-75 -z-10 h-full"
        src="/Sitefoxes.png"
        alt="foxes"
      />
    </div>
  );
}

export default Home;
