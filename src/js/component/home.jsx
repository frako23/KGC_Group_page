import React from "react";
import { Card } from "./card.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Navbar } from "./navbar.jsx";
import {Footer} from "./footer.jsx";
//create your first component


const Home = () => {
	return ( 
        <div>
            <Navbar />
            
        <div className="container my-5">
            <Jumbotron />
            <div className="row row-cols-1 row-cols-md-4 g-4">
            <Card />
            <Card />
            <Card />
            <Card />
            </div>
        </div>
        <Footer />
        </div>
        
    ) 
};

export default Home;
