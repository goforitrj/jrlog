import React from 'react';
import FirstArticle from '../components/story/FirstArticle';
import SecondArticle from '../components/story/SecondArticle';
import ThirdArticle from '../components/story/ThirdArticle';
import Footer from '../components/story/Footer';

const StoryContainer = () => {
    return (
        <>
            <FirstArticle />
            <SecondArticle />
            <ThirdArticle />
            <Footer />
        </>
    );
};

export default StoryContainer;
