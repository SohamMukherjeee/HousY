import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbr shadow-md fixed top-0 w-full z-50 bg-white">
        <div className="main-nav mx-auto flex justify-between items-center p-4">
          <h1
            className="logo-name cursor-pointer"
            onClick={() => navigate("/")}
          >
            HousY
          </h1>
          {/* desktop */}
          <ul className="navbar-desk hidden md:flex space-x-6 text-gray-600 font-medium">
            <li className="cursor-pointer" onClick={() => navigate("/buy")}>
              Buy
            </li>
            <li className="cursor-pointer" onClick={() => navigate("/sell")}>
              Sell
            </li>
            <li className="cursor-pointer" onClick={() => navigate("/login")}>
              Sign in
            </li>
            <li className="cursor-pointer" onClick={() => navigate("/signup")}>
              Sign up
            </li>
          </ul>
          {/* Mobile Menu */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen && (
          <div>
            <ul className="navbar-mobile gap-4">
              <li
                className="cursor-pointe p-2"
                onClick={() => navigate("/buy")}
              >
                Buy
              </li>
              <li
                className="cursor-pointer  p-2"
                onClick={() => navigate("/sell")}
              >
                Sell
              </li>
              <li
                className="cursor-pointer p-2"
                onClick={() => navigate("/login")}
              >
                Sign in
              </li>
              <li
                className="cursor-pointer p-2"
                onClick={() => navigate("/signup")}
              >
                Sign up
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
export default Navbar;
