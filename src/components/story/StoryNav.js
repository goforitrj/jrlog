import React from 'react';
import './StoryNavStyle.scss';

const StoryNav = () => {
    return (
        <nav id="home-nav">
            <span className="nav-icon">
                SJR
            </span>
            <div className="nav-info">
                <h1 className="nav-info-title">Jarang Stephanie Seo</h1>
                <div className="nav-info-description">Frontend Developer</div>
            </div>
            <span className="nav-more">
                <i className="fab fa-apple"></i>
            </span>
        </nav>
    );
};

export default StoryNav;
