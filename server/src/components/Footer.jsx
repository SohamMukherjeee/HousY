import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";
import { useAuth } from "./AuthContext";

function Footer() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <footer className="bg-[#C7C7C7] text-gray-800 py-6 px-4 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Branding */}
        <div className="mb-4 md:mb-0">
          <h1
            className="text-xl font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            HousY
          </h1>
          <p className="text-sm">Buy & Sell Properties</p>
        </div>

        {/* Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <p
            className="cursor-pointer hover:underline"
            onClick={() => navigate("/buy")}
          >
            Buy
          </p>
          <p
            className="cursor-pointer hover:underline"
            onClick={() => navigate("/sell")}
          >
            Sell
          </p>
          {currentUser && (
            <button
              onClick={handleLogout}
              className="text-sm text-red-600 hover:text-red-800"
            >
              Sign out
            </button>
          )}
        </div>

        {/* Social Media (Dummy) */}
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook">
            <img
              src="https://img.icons8.com/ios-filled/24/000000/facebook-new.png"
              alt="Facebook"
              className="hover:opacity-70"
            />
          </a>
          <a href="#" aria-label="Twitter">
            <img
              src="https://img.icons8.com/ios-filled/24/000000/twitter.png"
              alt="Twitter"
              className="hover:opacity-70"
            />
          </a>
          <a href="#" aria-label="Instagram">
            <img
              src="https://img.icons8.com/ios-filled/24/000000/instagram-new.png"
              alt="Instagram"
              className="hover:opacity-70"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
