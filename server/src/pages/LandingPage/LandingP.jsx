import Searchbar from "../../components/Searchbar";
import NNavbar from "../../components/NNavbar";
function LandingP() {
  return (
    <>
      <div className="relative w-full h-screen flex flex-col items-center justify-center  bg-gradient-to-r from-blue-100 via-green-50 to-beige-100">
        <NNavbar />
        {/* Background Image */}
        <img
          src="/bgLan.jpeg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover rounded-b-4xl "
        />

        {/* Character Image */}
        <img
          src="/Generated Image September 07, 2025 - 12_00AM-Photoroom.png"
          alt="Character"
          className="absolute bottom-0 left-5 w-1/3 md:w-1/4 lg:w-1/5 object-contain"
        />

        {/* Sofa / Side Decoration */}
        <img
          src="/catLan.png"
          alt="Sofa"
          className="absolute bottom-0 right-5 w-1/3 md:w-1/4 lg:w-1/5 object-contain"
        />

        {/* Text Content */}
        <div className="relative z-10 text-center md:text-left px-6 md:px-20 mt-10 sm:mt-40 ">
          <h1
            className="text-5xl md:text-7xl font-bold text-gray-900 relative"
            style={{ fontFamily: "Instrument Serif, serif", fontWeight: "500" }}
          >
            Find your dream home
          </h1>
        </div>
        <div className="flex justify-center items-center w-full mt-10">
          <Searchbar className="w-80 sm:w-[45vw] h-20 sm:h-24" />
        </div>
      </div>
    </>
  );
}
export default LandingP;
