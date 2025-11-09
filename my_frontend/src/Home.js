import React from 'react';
import CyberImg from './cyber.jpg'; // relative path from Home.js


function Home() {
    return (
        <div className="home">
            <h1>Welcome to my site</h1>
            <img src={CyberImg} alt="ERROR 404" />
            <p>This is the home page of my amazing website!</p>
        </div>
    );
}

export default Home;
