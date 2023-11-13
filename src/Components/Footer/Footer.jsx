import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/contentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Welcome to our premier online movie platform, where entertainment meets convenience. Discover a world of cinematic wonders at your fingertips. With our extensive collection of the latest blockbusters, timeless classics, and hidden gems, you can immerse yourself in a diverse array of genres, from action-packed thrillers to heartwarming dramas and everything in between. Our user-friendly interface ensures seamless navigation, allowing you to easily browse, search, and stream your favorite films in high definition. Stay updated with exclusive behind-the-scenes content, interviews with renowned directors, and insightful reviews from industry experts. Whether you're a dedicated cinephile or simply seeking an enjoyable movie night, our website is your ultimate destination for unparalleled movie magic.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;