import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Sell from "./pages/Sell";
import BuyPage from "./pages/BuyPage";
import PropertyDetails from "./components/PropertyDetails";
import Processing from "./pages/Processing";
import Signup from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/sell"
          element={
            <PrivateRoute>
              <Sell />
            </PrivateRoute>
          }
        />
        <Route path="/buy" element={<BuyPage />} />
        <Route
          path="/buy/:id"
          element={
            <PrivateRoute>
              <PropertyDetails />
            </PrivateRoute>
          }
        />
        <Route path="/processing" element={<Processing />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
