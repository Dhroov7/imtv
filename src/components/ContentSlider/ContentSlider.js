import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Core } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "./ContentSlider.css";

function ContentSlider({contentList, contentTitle}) {
    const handleHover = (e) => {
        console.log(e, "------");
    }
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
                                    return <SwiperSlide className="content-slider-image-container">
                                        <div className="slider-image" key={index}>
                                            <img src={content.image} alt={content.name} />
                                        </div>
                                    </SwiperSlide>
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