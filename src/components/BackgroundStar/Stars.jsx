import React from 'react';
import './Stars.css'; // assuming you have the CSS file named 'Stars.css' in the same directory

const Stars = () => {
    const starElements = [];
    for (let s = 0; s < 3; ++s) {
        const stars = [];
        for (let i = 0; i < 200; ++i) {
            const cx = `${Math.round(Math.random() * 10000) / 100}%`;
            const cy = `${Math.round(Math.random() * 10000) / 100}%`;
            const r = `${Math.round((Math.random() + 0.5) * 14) / 10}`;
            stars.push(<circle key={`star-${s}-${i}`} cx={cx} cy={cy} r={r} className="star" />);
        }
        starElements.push(
            <svg key={`stars-${s}`} width="100%" height="100%" preserveAspectRatio="none" className="stars">
                {stars}
            </svg>
        );
    }

    return (
        <div className="stars-wrapper">
            {starElements}
            <svg width="100%" height="100%" preserveAspectRatio="none" className="extras">
                <defs>
                    <radialGradient id="comet-gradient" cx="0" cy=".5" r="0.5">
                        <stop offset="0%" stopColor="rgba(255,255,255,.8)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </radialGradient>
                </defs>
                <g transform="rotate(-135)">
                    <ellipse className="comet comet-a" fill="url(#comet-gradient)" cx="0" cy="0" rx="150" ry="2" />
                </g>
                <g transform="rotate(20)">
                    <ellipse className="comet comet-b" fill="url(#comet-gradient)" cx="100%" cy="0" rx="150" ry="2" />
                </g>
                <g transform="rotate(300)">
                    <ellipse className="comet comet-c" fill="url(#comet-gradient)" cx="40%" cy="100%" rx="150" ry="2" />
                </g>
                <g transform="rotate(-15)">
                    <ellipse className="comet comet-a" fill="url(#comet-gradient)" cx="0" cy="0" rx="150" ry="2" />
                </g>
                <g transform="rotate(50)">
                    <ellipse className="comet comet-b" fill="url(#comet-gradient)" cx="100%" cy="0" rx="150" ry="2" />
                </g>
                <g transform="rotate(110)">
                    <ellipse className="comet comet-c" fill="url(#comet-gradient)" cx="40%" cy="100%" rx="150" ry="2" />
                </g>
                <g transform="rotate(-185)">
                    <ellipse className="comet comet-a" fill="url(#comet-gradient)" cx="0" cy="0" rx="150" ry="2" />
                </g>
                <g transform="rotate(10)">
                    <ellipse className="comet comet-b" fill="url(#comet-gradient)" cx="100%" cy="0" rx="150" ry="2" />
                </g>
                <g transform="rotate(48)">
                    <ellipse className="comet comet-c" fill="url(#comet-gradient)" cx="40%" cy="100%" rx="150" ry="2" />
                </g>
                <g transform="rotate(-75)">
                    <ellipse className="comet comet-a" fill="url(#comet-gradient)" cx="0" cy="0" rx="150" ry="4" />
                </g>
                <g transform="rotate(120)">
                    <ellipse className="comet comet-b" fill="url(#comet-gradient)" cx="100%" cy="0" rx="150" ry="3" />
                </g>
                <g transform="rotate(300)">
                    <ellipse className="comet comet-c" fill="url(#comet-gradient)" cx="40%" cy="100%" rx="150" ry="10" />
                </g>
            </svg>
        </div>
    );
};

export default Stars;
