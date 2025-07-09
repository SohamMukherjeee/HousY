import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Sell from "./pages/Sell";
import BuyPage from "./pages/BuyPage";
import PropertyDetails from "./components/PropertyDetails";
import Processing from "./pages/Processing";
import Signup from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer, toast } from "react-toastify";
import NotFound from "./pages/NotFound";
import AgentList from "./pages/AgentList";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
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
        <Route
          path="/agents"
          element={
            <PrivateRoute>
              <AgentList />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
