import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import trendingImage from "../../assets/images/avatar.png";
import comingSoonImage from "../../assets/images/thor.png";
import trendingSvg from "../../assets/icons/trending.svg";
import comingSoonSvg from "../../assets/icons/comingSoon.svg";
import "swiper/css";
import "swiper/css/navigation";
import Banner from "../Banner/Banner";

import "./Highlights.css";
import highlightsData from "./Highlights.json";
import { Navigation } from "swiper";

function Highlights() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
                <SwiperSlide><Banner bannerImage={trendingImage} bannerTitle={highlightsData.trending.title} bannerDescription={highlightsData.trending.description} bannerDuration={highlightsData.trending.duration} bannerIcon={trendingSvg} bannerType={highlightsData.trending.type}/></SwiperSlide>
                <SwiperSlide><Banner bannerImage={comingSoonImage} bannerTitle={highlightsData.comingSoon.title} bannerDescription={highlightsData.comingSoon.description} bannerDuration={highlightsData.comingSoon.duration} bannerIcon={comingSoonSvg} bannerType={highlightsData.comingSoon.type} /></SwiperSlide>
            </Swiper>
        </>
    );
}

export default Highlights;