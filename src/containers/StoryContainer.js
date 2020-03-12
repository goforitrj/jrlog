import React from 'react';
import StoryNav from '../components/story/StoryNav';
import FirstArticle from '../components/story/FirstArticle';
import SecondArticle from '../components/story/SecondArticle';
import ThirdArticle from '../components/story/ThirdArticle';
import Footer from '../components/story/Footer';

const StoryContainer = () => {
    return (
        <>
            <StoryNav />
            <section id="home-section" style={{ marginLeft: '88px' }}>
                <FirstArticle />
                <SecondArticle />
                <ThirdArticle />
                <Footer />
            </section>
        </>
    );
};

export default StoryContainer;
