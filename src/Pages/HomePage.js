import React from "react";
import "../index.css";
import { Header } from "../Layouts/Header";
import { HomePageContent } from "../Layouts/HomePageContent";
import { Footer } from "../Layouts/Footer";



export const HomePage = () => {
    return (
        <div>
            <Header />
            <HomePageContent />
            <Footer />

        </div>
    )
}