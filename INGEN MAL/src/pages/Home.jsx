import React from "react";
import Header from "../components/header";  
import "../App.css";
import InfoboxComponent from "../components/Infobox";
import Title from "../components/title";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <Header />

        <main>
                <div className="hero-section">
                    <Title/>
                    <div className="grid-overlay"/>
                    
                
                </div>

                <div className="section-a">
                    <InfoboxComponent />
                
                </div>

                <div className="section-b">
                    <div className="grid-overlaydark"/>
                
                </div>

                <div className="some-section">
                
                </div>

                <div className="mockup-section">
                    <div className="grid-overlaymockup"/>
                
                </div>

                <div className="medie-section">
                
                </div>

        </main>
        <Footer />
        </div>
    );
}

export default Home;