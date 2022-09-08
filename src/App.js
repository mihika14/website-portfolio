import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Services from "./components/Services";

function App  ()  {
    return (
        <div>
            <Navbar />
            <HomePage />
            <br />
            <Services />
        </div>
    )
};

export default App;