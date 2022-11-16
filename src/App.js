import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
