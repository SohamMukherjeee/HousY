import Navbar from "../components/Navbar";
import Heroform from "../components/Heroform";
import Footer from "../components/Footer";
import BuildingPic from "../assets/Building-cuate.png";
function Sell() {
  return (
    <>
      <Navbar />
      <div className="main flex justify-center flex-col sm:flex-row">
        <div className="left-main w-screen sm:w-1/2 h-1/2 sm:h-screen flex justify-center items-center">
          <img
            src={BuildingPic}
            alt="City illustrations by Storyset-page-photo(https://storyset.com/city)"
            className="h-1/2 w-1/2 my-15 sm:my-0"
          />
        </div>
        <div className="right-main  w-screen sm:w-1/2 h-1/2 sm:h-screen">
          <Heroform />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Sell;
