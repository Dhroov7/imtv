import React from 'react';
import { ReactSVG } from 'react-svg';
import plusSvg from "../../assets/icons/plus.svg";
import heartSvg from "../../assets/icons/heart.svg";
import { Link } from "react-router-dom";

import "./Banner.css";
function Banner({ bannerImage, bannerTitle, bannerDescription,
     bannerDuration, bannerType, bannerIcon }) {
    return (
        <div className="banner-container">
            <div className="banner-meta">
                <div className="banner-type">
                    <ReactSVG src={bannerIcon} />
                    <p className="banner-type-word">{bannerType}</p>
                </div>
                <div className="banner-meta-data">
                    <p className="content-title">{bannerTitle}</p>
                    <p className="content-language-duration">{bannerDuration}</p>
                    <p className="banner-description">
                        {bannerDescription}
                    </p>
                </div>
                <div className="banner-actions">
                <Link to="/watch" className="watch-now">Watch Now</Link>
                    <ReactSVG src={plusSvg} className="banner-action-buttons-svg" />
                    <ReactSVG src={heartSvg} className="banner-action-buttons-svg" />
                </div>
            </div>
            <div className="banner-image">
                <img src={bannerImage} alt="Banner" />
            </div>
        </div>
    );
}

export default Banner;