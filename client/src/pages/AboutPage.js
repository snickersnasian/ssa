import React from "react";
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Centers } from "../components/Centers";
import { Footer } from "../components/Footer";

export const AboutPage = () => {
    return (
        <div className="about-page">
            <Navbar />
            <About />
            <Centers />
            <Footer />
        </div>
    )
}