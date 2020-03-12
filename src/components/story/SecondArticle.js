import React from 'react';
import './SecondArticle.scss';

const SecondArticle = () => {
    return (
        <article id="secondArticle" className="second-article">
            <div className="mystory second-article-start">
                <h2>story</h2>
                <div>
                    My experience as a Frontend Developer for 4 years at LINE
                    Plus (LINE Plus supports LINE’s global business development)
                    and SK Planet (SK Group is the 3rd largest conglomerate in
                    Korea with 89 subsidiaries and affiliates ranging from a
                    variety of industry verticals) allowed me to fully develop
                    my skills in frontend development and constantly reach
                    higher goals in the IT industry.
                </div>
                <div className="button-area">
                    <a href="#">More about me</a>
                    <div className="download">Download Resume</div>
                </div>
            </div>
            <div className="experience second-article-middle">
                <h2>experience</h2>
                <div className="work-experience">
                    <div className="date">June 2019 - November 2019</div>
                    <div className="title">
                        Frontend Developer
                        <span className="company">@ Line Plus Corp.</span>
                    </div>
                    <div className="description">
                        Developed Data Analytics website, named Growthy
                        Analytics, available for Korean, Chinese, Japanese users
                        using VueJS and Vuex
                    </div>
                </div>
                <div className="work-experience">
                    <div className="date">October 2018 - June 2019</div>
                    <div className="title">Frontend Developer</div>
                    <div className="description">
                        Developed Data Analytics website, named Probe, using
                        Python, Flask, Pandas, Numpy
                    </div>
                </div>
                <div className="work-experience">
                    <div className="date">January 2017 - May 2018</div>
                    <div className="title">Frontend Developer</div>
                    <div className="description">
                        Revamp Mobile Web UI for customer-facing e-commerce site
                        with 2,300,000+ unique visitors per month
                    </div>
                </div>
            </div>
            <div
                className="skills second-article-end"
                data-w-id="23c923c1-0ca6-9741-b8d8-fe2aa6e24872"
            >
                <h2>skills</h2>
                <div>HTML</div>
                <div>CSS</div>
                <div>Javascript</div>
                <div>Vue.js</div>
                <div>React.js</div>
                <div>Node.js</div>
                <div>jQuery</div>
            </div>
        </article>
    );
};

export default SecondArticle;
