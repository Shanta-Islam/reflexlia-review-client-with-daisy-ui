import React from 'react';

const HeaderBanner = () => {
    return (
        <div className="hero min-h-screen" style={{ 
            backgroundImage: `url("https://i.ibb.co/M1p6242/pexels-sam-forson-154243.jpg")` 
          }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">      
                    <h1 className="mb-5 text-5xl font-bold">Capture The Moments in Time</h1>
                    <p className="mb-5">Sharing a moment in the form of a picture makes you feel connected to others.</p>
                    <button className="btn">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;