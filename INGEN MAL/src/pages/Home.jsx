import React from "react";
import Header from "../components/header";  
import "../App.css";
import InfoboxComponent from "../components/Infobox";
import Title from "../components/title";

function Home() {
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
                
                </div>

                <div className="some-section">
                
                </div>

                <div className="mockup-section">
                
                </div>

                <div className="medie-section">
                
                </div>

        </main>
        </div>
    );
}

export default Home;