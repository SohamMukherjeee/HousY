import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Herosec from "../components/Herosec";
import Agentcon from "../components/Agentcon";
import Timeline from "../components/Timeline";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Herosec />
        <div className="flex flex-col items-center justify-center py-8 ">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            <span className="text-[#D3766A]">Housy</span> is Available In
          </h1>
          <h2 className="text-md sm:text-lg text-gray-500 tracking-wide">
            Kolkata, Mumbai, Delhi, Chennai
          </h2>
        </div>
        <Agentcon />
        <Timeline />
        <Footer />
      </div>
    </>
  );
}

export default Home;
