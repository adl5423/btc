import React, { useState } from "react";

const addresses = [
""
];

function Home() {
  const [address, setAddress] = useState("");
  const [result, setResult] = useState("");

  function handleAddressChange(event) {
    setAddress(event.target.value);
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
    <div className="relative h-screen">
      <div className="flex absolute left-20 flex-col justify-center items-center max-[445px]:left-10">
        <div className="mt-16 rounded-xl border-2 border-white pb-10 pt-12 w-[500px] shadow-lg shadow-white bg-gradient-to-b from-[#6F492E] to-black max-[645px]:w-[400px] max-[545px]:w-[300px]">
          <div className="flex justify-center items-center pb-8 text-xl font-bold">
            <p>Verify your wallet here</p>
          </div>
          <div className="flex justify-center items-center">
          <input
            type="text"
            id="address"
            value={address}
            placeholder="Write wallet here..."
            onChange={handleAddressChange}
            className="rounded-lg px-5 py-2 border-none text-black w-3/4"
          />
          </div>

          <div className="mt-2 flex justify-center items-center pt-4">
            <p className="text-lg italic font-sans">{result}</p>
          </div>
        </div>
      </div>

      <div>
        <button
          type="button"
          onClick={handleCheckAddress}
          className="absolute bottom-16 right-1/4 rounded-r-lg cursor-pointer p-32"
        ></button>
      </div>

      <img
        className="absolute right-0 top-0 opacity-75 -z-10 h-screen w-screen"
        src="/Sitefoxes.gif"
        alt=""
      />
    </div>
  );
}

export default Home;
