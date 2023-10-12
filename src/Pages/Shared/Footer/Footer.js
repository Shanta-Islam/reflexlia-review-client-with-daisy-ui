import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <h3 className='text-xl font-medium'>Reflexlia</h3>
                <p>Reflexlia is a photography website. Sharing a moment <br/>in the form of a picture makes you feel connected to others.</p>
            </div>
            <div>
                <span className="footer-title">About</span>
                <a href="/" className="link link-hover">Daisy UI</a>
                <a href="/" className="link link-hover">Tailwind Css</a>
            </div>
            <div>
                <span className="footer-title">Follow Us</span>
                <a href="/" className="link link-hover">Github</a>
                <a href="/" className="link link-hover">LinkedIn</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a href="/" className="link link-hover">Terms of use</a>
                <a href="/" className="link link-hover">Privacy policy</a>
            </div>
        </footer>
    );
};

export default Footer;