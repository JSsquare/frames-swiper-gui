import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectCoverflow} from 'swiper';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const ImageFrames = ({ googleStorageImages }) => {    
    return (
    <React.Fragment>
        <Swiper tag="section" wrapperTag="ul"
        spaceBetween={10}
        slidesPerView={'auto'}      
        effect='coverflow'  
        grabCursor={true}
        centeredSlides={true} coverflowEffect={{
            "rotate": 50,
            "stretch": 0,
            "depth": 100,
            "modifier": 1,
            "slideShadows": true
        }}
        navigation
        pagination    
        >
            {googleStorageImages.map((name_url, index) => (
               ( 
               <SwiperSlide tag="li" key={index}>
                    <img 
                    src={name_url}
                    alt={`Slide ${index}`}
                    />
                </SwiperSlide>
                )
            ))}
        </Swiper>
    </React.Fragment>
    );
};

export default ImageFrames;