import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./Pages/Welcome/WelcomePage";
import Signup from "./Pages/Signup/Signuppage";
import Profile from "./Pages/Profile/Profilepage";
import Loginpage from "./Pages/Login/Loginpage";
import ProtectedRoute from "./Routes/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Loginpage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
