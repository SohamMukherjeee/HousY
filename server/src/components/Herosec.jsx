import Searchbar from "./Searchbar";
import { useState } from "react";
import House from "../assets/House-searching-cuate.png";
function Herosec() {
  return (
    <>
      <div className="main-div flex justify-center min-h-screen w-screen flex-col sm:flex-row">
        <div className="main-left h-1/2 sm:h-screen w-screen sm:w-1/2 flex justify-center items-center">
          <img src={House} alt="background photo" className="w-3/4 h-3/4" />
        </div>
        <div className="main-right h-1/4 sm:h-screen w-screen sm:w-1/2  flex  flex-col justify-center items-center gap-12">
          <h1 className="text-3xl font-bold">
            <span className="text-black">Buy. </span>
            <span className="text-[#D3766A]">Sell. </span>
            <span className="text-black">Connect.</span>
          </h1>
          <div className="sr flex justify-center items-center w-full">
            <Searchbar className="w-70 sm:w-130 h-20 sm:h-24" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosec;
