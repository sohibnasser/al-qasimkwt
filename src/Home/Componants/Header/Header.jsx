import 'swiper/css';
import 'swiper/css/effect-cards';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HeaderWrapper } from './Style';
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";

export default function Header() {
  return (
    <HeaderWrapper>

         <Swiper
          style={{width: "100%" , height: "100%"}}
        centeredSlides={true}
        autoplay={{
          delay:2500,
          disableOnInteraction:false
        }}
    
      modules={[Autoplay]}
      loop={true}
      
      className="mySwiper2"
    >
      <SwiperSlide style={{width: "100%" , height: "100%"}} className='swiperslide2'><img style={{width: "100%" , height: "100%"}}  className='image2' src={img1} alt='img1'/></SwiperSlide>
      <SwiperSlide style={{width: "100%" , height: "100%"}} className='swiperslide2'><img style={{width: "100%" , height: "100%"}}  className='image2' src={img2} alt='img2' /></SwiperSlide>
      <SwiperSlide style={{width: "100%" , height: "100%"}} className='swiperslide2'><img style={{width: "100%" , height: "100%"}}  className='image2' src={img3} alt='img3' /></SwiperSlide>
      <SwiperSlide style={{width: "100%" , height: "100%"}} className='swiperslide2'><img style={{width: "100%" , height: "100%"}}  className='image2' src={img4} alt='img4' /></SwiperSlide>
      <SwiperSlide style={{width: "100%" , height: "100%"}} className='swiperslide2'><img style={{width: "100%" , height: "100%"}}  className='image2' src={img5} alt='img5' /></SwiperSlide>
      
    </Swiper>

    </HeaderWrapper>
  )
}
