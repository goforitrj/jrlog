import React from 'react';
import StoryNav from '../components/story/StoryNav';
import FirstArticle from '../components/story/FirstArticle';
import SecondArticle from '../components/story/SecondArticle';

const StoryContainer = () => {
    return (
        <>
            <StoryNav />
            <section id="home-section">
                <FirstArticle />
                <SecondArticle/>
            </section>
        </>
    );
};

export default StoryContainer;
