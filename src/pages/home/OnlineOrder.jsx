import React from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
const OnlineOrder = () => {
    return (
        <div className='pb-12'>
            <SectionTitle heading={'Order Online'} subHeading={'---From 11.00AM to 06.00PM---'}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='mb-8'>
                    <img src={slide1} alt="" />
                    <h2 className='text-white font-semibold text-xl text-center -my-8'>Salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className='text-white font-semibold text-xl text-center -my-8'>Dessert</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h2 className='text-white font-semibold text-xl text-center -my-8'>Pizza</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h2 className='text-white font-semibold text-xl text-center -my-8'>Graps</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h2 className='text-white font-semibold text-xl text-center -my-8'>Tomato</h2>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OnlineOrder;