import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";
import "swiper/swiper-bundle.css";
import slider1 from "./slider1.jpg";
import slider2 from "./slider2.jpg";
import slider3 from "./slider3.jpg";
import slider4 from "./slider4.jpg";
import slider5 from "./slider5.jpg";

SwiperCore.use([Navigation, Pagination, Autoplay]);

function slider() {
  return (
    <Swiper
      className="swiper-container"
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000 }}
    >
      <SwiperSlide className="swiper-slide">
        <img src={slider1} alt="Imagen 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider2} alt="Imagen 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider3} alt="Imagen 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider4} alt="Imagen 4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider5} alt="Imagen 5" />
      </SwiperSlide>
    </Swiper>
  );
}
export default slider;
