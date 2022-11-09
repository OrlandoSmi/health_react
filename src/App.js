import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
//import { Routes, Route } from "react-router-dom";
// import AnimatedRoutes from "./components/AnimatedRoutes";
// import Dashboard from "./pages/Dashboard";
// import ForgotPassword from "./pages/Forgot-Password";
// import Home from "./pages/Home"
// import Offers from "./pages/Offers";
// import Settings from "./pages/Settings";
// import SignIn from "./pages/Sign-in";
// import SignUp from "./pages/Sign-up";

const App = () => {
  return (
    <>
      <Router>
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
