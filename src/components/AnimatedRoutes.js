import React from 'react'
import Dashboard from "../pages/Dashboard";
import ForgotPassword from "../pages/Forgot-Password";
import Home from "../pages/Home"
import Offers from "../pages/Offers";
import Settings from "../pages/Settings";
import SignIn from "../pages/Sign-in";
import SignUp from "../pages/Sign-up";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/offers" element={<Offers />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;