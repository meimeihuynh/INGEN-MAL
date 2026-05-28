import React from "react";
import Headerstore from "../components/header-store";  
import "../App.css";
import Footer from "../components/footer";
import ProductCard from "../components/productcard";
import useNavigate from "react-router-dom";

function Store() {
    const navigate = useNavigate();

    return (
        <div>
            <Headerstore />

            <main>
                <div className="mockup-section">
                    <div className="grid-overlaymockup"/>
                    
                </div>
                <ProductCard />
                
            </main>
        </div>
    );
}

export default Store;