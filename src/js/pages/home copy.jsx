import React from "react";
import { Card } from "../component/card.jsx";
import { Jumbotron } from "../component/jumbotron.jsx";
import { Jumbotron_copy } from "../component/jumbotron_copy.jsx";
import { Navbar } from "../component/navbar.jsx";
import {Footer} from "../component/footer.jsx";
//create your first component


const Home = () => {
	return ( 
        <div>
            <Navbar />
            
        <div className="container my-5">
            <Jumbotron />
            <div className="row row-cols-1 row-cols-md-4 g-4">
            <Card />
            </div>
            <Jumbotron_copy/>
        </div>
        <Footer />
        </div>
        
    ) 
};

export default Home;
