import React, { useState } from 'react';
import { Swiper } from "swiper/react";
import { FreeMode, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "./ContentSlider.css";
import ContentCard from '../ContentCard/ContentCard';

function ContentSlider({contentList, contentTitle}) {
    return (
        <div className="content-slider">
            <div className="content-slider-container">
                <p className="content-slider-heading">{contentTitle}</p>
                <div className="content-slider-content">
                    <div>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            freeMode={true}
                            navigation={true}
                            modules={[FreeMode, Navigation]}
                            className="mySwiper"
                            allowTouchMove={true}
                            breakpoints={{
                                640: {
                                    width: 640,
                                    slidesPerView: 3,
                                },
                                768: {
                                    width: 768,
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            {
                                contentList.map((content, index) => {
                                    return <ContentCard content={content} index={index}></ContentCard>
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentSlider;