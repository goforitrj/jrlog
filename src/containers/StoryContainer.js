import React from 'react';
import StoryNav from '../components/story/StoryNav';
import FirstArticle from '../components/story/FirstArticle';
import SecondArticle from '../components/story/SecondArticle';
import ThirdArticle from '../components/story/ThirdArticle';

const StoryContainer = () => {
    return (
        <>
            <StoryNav />
            <section id="home-section">
                <FirstArticle />
                <SecondArticle />
                <ThirdArticle />
            </section>
        </>
    );
};

export default StoryContainer;
