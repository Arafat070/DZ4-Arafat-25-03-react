import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar,A11y, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Slider = ({slides}) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={40}
            slidesPerView={2}
            navigation
            autoplay
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {slides.map(slide => <SwiperSlide key={slide.id}> <img src={slide.url} alt='slider'/> </SwiperSlide>)}
        </Swiper>
    );
};

export default Slider