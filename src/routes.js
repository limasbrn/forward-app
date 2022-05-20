import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import DirectionPage from "./pages/directionpage";
import RegisterPage from "./pages/register";

const MainRoutes = ( ) => {
    return(
        <Routes >
            <Route 
            path="/" 
            element={<DirectionPage/>}
            />
            <Route 
            path="/login" 
            element={<LoginPage/>}
            />
            <Route 
            path="/register" 
            element={<RegisterPage/>}
            />
            
        </Routes>  
          )
}

export default MainRoutes;
