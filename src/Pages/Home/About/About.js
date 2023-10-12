import React from 'react';

const About = () => {
    return (
        <div className="hero min-h-screen mt-8">
            <div className="hero-content flex-col md:flex-row">
                <div className="w-1/2 relative">
                    <img src="https://i.ibb.co/MR8HzBT/pexels-george-milton-7014433.jpg" alt="about img"  className="max-w-sm rounded-lg shadow-2xl"/>
                    <div className="absolute right-5 top-20 box-border h-96 w-80 p-4 border-4 invisible md:visible">
                        <img src="https://i.ibb.co/KzPCTYK/pexels-cottonbro-studio-3584992.jpg" alt="" className='w-80 absolute left-16 rounded-lg shadow-2xl' />
                    </div>
                </div>
                <div className="px-12 w-1/2">
                    <p className="text-3xl font-bold">About</p>
                    <p className="py-6">Time flies, as everyone knows, but the moment can be captured. Because every moment in important. Nicxelia is a photography website. This website will take you back to that beautiful moments.</p>
                    <button className="btn">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;