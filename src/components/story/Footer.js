import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="about-me">Working holiday in Sydney</div>
            <div className="navigation">
                <a href="#" className="home">
                    HOME
                </a>
                <a href="#" className="porfolio">
                    Portfolio
                </a>
            </div>
            <div className="contacts">
                <div className="email">
                    <span className="email-icon"></span>
                    <div className="email-address">rangs919@gmail.com</div>
                </div>
            </div>
            <div className="sns">
                <div className="button-area sns-button-area">
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
        </footer>
    );
};

export default Footer;
