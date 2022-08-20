import React from 'react';
import { SwiperSlide } from "swiper/react";
import { CDN_PATH } from "../../constant";

import "swiper/css";
import "swiper/css/free-mode";
import "./ContentCard.css";
import { useState } from 'react';
import ContentModal from '../ContentModal/ContentModal';

function ContentCard({ content, index }) {
    const [modalIsOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!modalIsOpen);
    }

    return <div className='content-card' onClick={handleClick}>
        <SwiperSlide className="content-slider-image-container">
            <div className="slider-image" key={index}>
                <img src={CDN_PATH + "/images/" + content.Image} alt={content.Name} />
            </div>
        </SwiperSlide>
        <ContentModal modalIsOpen={modalIsOpen} data={content}></ContentModal>
    </div>;
}

export default ContentCard;