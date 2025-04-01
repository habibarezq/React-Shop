import React from "react";
import "../styles/navbar.css"; // Import CSS for styling

const WaveBg = () => {
    return (
        <div className="wave-background" >
            <svg viewBox="0 0 1440 320">
                <path
                    fill="#001F54"
                    d="M0,224L60,213.3C120,203,240,181,360,160C480,139,600,117,720,106.7C840,96,960,96,1080,128C1200,160,1320,224,1380,256L1440,288V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z"
                ></path>
            </svg>
        </div>
    );
};

export default WaveBg;
