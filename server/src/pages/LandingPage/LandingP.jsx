import Searchbar from "../../components/Searchbar";
function LandingP() {
  return (
    <>
      <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-blue-100 via-green-50 to-beige-100">
        {/* Background Image */}
        <img
          src="/bgLan.jpeg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Character Image */}
        <img
          src="/manLan.png"
          alt="Character"
          className="absolute bottom-0 left-5 w-2/3 md:w-3/4 lg:w-2/5 object-contain"
        />

        {/* Sofa / Side Decoration */}
        <img
          src="/catLan.png"
          alt="Sofa"
          className="absolute bottom-0 right-5 w-1/3 md:w-1/4 lg:w-1/5 object-contain"
        />

        {/* Text Content */}
        <div className="relative z-10 text-center md:text-left px-6 md:px-20">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900">
            Find your dream home
          </h1>
        </div>
        <div className="sr flex justify-center items-center w-full mt-10">
          <Searchbar className="w-80 sm:w-130 h-20 sm:h-24" />
        </div>
      </div>
    </>
  );
}
export default LandingP;
