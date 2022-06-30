import React from 'react';

import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-links">
                    <p>About IMTV</p>
                    <p>Terms Of Use</p>
                    <p>Privacy Policy</p>
                    <p>FAQ</p>
                    <p>Feedbacks</p>
                    <p>Careers</p>
                </div>
                <div className="footer-description">
                    <p>
                        © 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;