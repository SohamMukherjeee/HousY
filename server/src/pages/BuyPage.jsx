import Navbar from "../components/Navbar";
import PropertyGrid from "../components/PropertyGrid";
import Footer from "../components/Footer";
import NNavbar from "../components/NNavbar";

function BuyPage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <NNavbar />

      {/* Main Content Container - Fixed Height */}
      <div className="flex flex-1 mt-20 overflow-hidden">
        {/* Left Side - Property List (scrollable) */}
        <div className="w-full md:w-full lg-1/2 flex flex-col">
          {/* Scrollable Property Grid - Only this scrolls */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <PropertyGrid />
          </div>
        </div>

        {/* Right Side - Static Map/Image (visible only on md+) */}
        <div className="hidden lg:block w-1/2 relative">
          <img
            src="/Generated Image September 06, 2025 - 11_09PM.jpeg"
            alt="Properties Map"
            className="w-full h-full object-cover p-10"
          />
        </div>
      </div>
    </div>
  );
}

export default BuyPage;
