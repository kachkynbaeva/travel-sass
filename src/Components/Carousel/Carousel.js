import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.scss';
import { Navigation } from 'swiper/modules';

const Carousel = () => {
    return (
        <div className={"container"}>
            <Swiper navigation={false} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="carousel__wrapper">
                        <h2 className={"carousel-title"}>
                            It’s Time To
                            Explore The World
                        </h2>
                        <button className={"carousel-button"}>
                            Plan Your Trip
                        </button>
                    </div>
                </SwiperSlide>
                {/*<SwiperSlide>*/}
                {/*    <div className="carousel__wrapper">*/}
                {/*        <h2 className={"carousel-title"}>*/}
                {/*            It’s Time To*/}
                {/*            Explore The World*/}
                {/*        </h2>*/}
                {/*        <button className={"carousel-button"}>*/}
                {/*            Plan Your Trip*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</SwiperSlide>*/}
            </Swiper>
        </div>
    );
};

export default Carousel;