import React from 'react';
import StoryNav from '../components/story/StoryNav';
import FirstArticle from '../components/story/FirstArticle';

const StoryContainer = () => {
    return (
        <>
            <StoryNav />
            <section id="home-section">
                <FirstArticle />
            </section>
        </>
    );
};

export default StoryContainer;
