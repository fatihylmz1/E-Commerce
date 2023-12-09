import React from "react";
import "../index.css";
import { Header } from "../Layouts/Header";
import { HomePageContent } from "../Layouts/HomePageContent";


export const HomePage = () => {
    return (
        <div>
            <Header />
            <HomePageContent />
        </div>
    )
}