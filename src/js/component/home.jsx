import React from "react";

//create your first component
const Home = () => {
	return (
		<div id="app">
        <div>
            <div id="trafficTop"></div>
            <div id="container">
                <div className="redlight"></div>
                <div className="yellowlight"></div>
                <div className="greenlight"></div>
            </div>
        </div>
    </div>
	);
};

export default Home;
