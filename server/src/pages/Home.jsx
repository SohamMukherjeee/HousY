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
      <Navbar />
      <Herosec />
      <Agentcon />
      <Timeline />
      <Footer />
    </>
  );
}

export default Home;
