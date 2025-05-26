import Navbar from "../components/Navbar";
import PropertyGrid from "../components/PropertyGrid";
import Footer from "../components/Footer";

function BuyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 m-12">
        <PropertyGrid />
      </div>
      <Footer />
    </div>
  );
}
export default BuyPage;
