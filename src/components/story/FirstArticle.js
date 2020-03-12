import React from 'react';
import './FirstArticle.scss';

const FirstArticle = () => {
    return (
        <article className="first-article">
            <div className="info-left">
                <div className="info-left-container">
                    <h2>HELLO, I'm Jarang. Frontend Developer.</h2>
                    <p>
                        4 years of experience in Frontend development Managed
                        global e-commerce websites and internal libraries Worked
                        with international developers, designers and testers
                        Specialize in VueJS, ReactJS and Javascript
                    </p>
                    <div className="info-left-location">
                        <span className="logo"></span>
                        <div>currently in</div>
                        <div>Sydney, Australia</div>
                    </div>
                </div>
            </div>
            <div className="info-right">
                <div className="button-area sns-button-area after">
                    <div className="button">
                        <a href="https://github.com/goforitrj" target="_blank">
                            <i className="fab fa-github"></i>
                        </a>
                        <div className="hover-bg"></div>
                    </div>
                    <div className="button">
                        <a
                            href="https://www.linkedin.com/in/jarang-seo-27a481169/"
                            target="_blank"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <div className="hover-bg"></div>
                    </div>
                    <div className="button">
                        <a
                            href="https://www.facebook.com/jarang.seo"
                            target="_blank"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <div className="hover-bg"></div>
                    </div>
                    <div className="button">
                        <a
                            href="https://www.instagram.com/jarangseo/"
                            target="_blank"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <div className="hover-bg"></div>
                    </div>
                </div>
            </div>
            <div className="down-button">
                <a href="#secondArticle">
                    <i className="fas fa-arrow-down"></i>
                </a>
            </div>
        </article>
    );
};

export default FirstArticle;
