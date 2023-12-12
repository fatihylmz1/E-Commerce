import React from "react";
import "../index.css";
import { Header } from "../Layouts/Header";
import { HomePageContent } from "../Layouts/HomePageContent";
import { Footer } from "../Layouts/Footer";
import { Featured } from "../Layouts/Featured";


export const HomePage = () => {
    return (
        <div>
            <Header />
            <HomePageContent />
            <Featured />
            <Footer />

        </div>
    )
}