import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Thumbs} from 'swiper';
import SpeakerNotesEditor from './SpeakerNotesEditor';

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Thumbs]);

const ImageFrames = ({ frameSpeakerNotes }) => { 
    const [thumbsSwiper, setThumbsSwiper] = useState(null);   
    
    return (
    <>
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
        thumbs={{ swiper: thumbsSwiper }}   
        >      
    {frameSpeakerNotes.map((frames, index) => (        
        <SwiperSlide tag="li" key={index}>        
        <img 
        src={frames.frameImageName}
        alt={`Slide ${index}`}
        />                
    </SwiperSlide>  
    ))}
        </Swiper>
        <Swiper onSwiper={setThumbsSwiper} spaceBetween={0} slidesPerView={1} freeMode={true} watchSlidesVisibility={true} watchSlidesProgress={true} className="mySwiper">           
        {frameSpeakerNotes.map((frames, index) => ( 
            <SwiperSlide key={index}>
                <SpeakerNotesEditor frames={frames}/>                
            </SwiperSlide>
        ))}
        </Swiper>
    </>
    );
};

export default ImageFrames;