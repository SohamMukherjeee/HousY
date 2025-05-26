import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../components/Firebase";
import { setDoc, doc } from "firebase/firestore";
import { IoLogoGoogle } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    // Handle signup logic here
    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log(`successfully done`);
      navigate("/");
      const user = auth.currentUser;
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        name: formData.username,
        createdAt: new Date(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignup = () => {
    // Placeholder: Integrate Google OAuth here
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        toast.error("Login Failed" + error.message, {
          position: "top-right",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4">
          <button
            onClick={handleGoogleSignup}
            className="w-full border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
          >
            <span className="flex justify-center flex-row gap-2 items-center">
              <IoLogoGoogle className="text-xl" />
              Signup with Gmail
            </span>
          </button>
        </div>

        <p className="text-sm text-center mt-4 text-gray-600">
          Already registered?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
