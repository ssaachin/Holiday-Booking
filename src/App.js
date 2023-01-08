import React from "react";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Stays from "./components/Purpose/stays";
import Activity from "./components/Purpose/activity";
import Flights from "./components/Purpose/Flights";


import { 
    BrowserRouter as Router, 
    Routes, 
    Route, 
   } from "react-router-dom";




export default function App() {
    return <>

        {/* Routing pages */}

        <Router> 
            <Navbar/>
                <Routes>
                    <Route path="/" exact element={<Home />}/>
                    <Route path="/stays"  element={<Stays />}/>
                    <Route path="/flights"  element={<Flights />}/>
                    <Route path="/activity" element={<Activity />}/>
                </Routes>
                <Footer/>
                <ScrollToTop/>
        </Router>
    </>;
}