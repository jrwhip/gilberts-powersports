import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./hero-swiper.css";

const HeroSwiper = ({ slides }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    swiper.on("slideChange", () => {
      document.querySelectorAll("video").forEach((video) => video.pause());
      const activeVideo =
        swiper.slides[swiper.activeIndex].querySelector("video");
      if (activeVideo) activeVideo.play();
    });
  }, []);

  const handleMouseEnter = () => {
    if (swiperRef.current?.swiper) swiperRef.current.swiper.autoplay.stop();
  };

  const handleMouseLeave = () => {
    if (swiperRef.current?.swiper) swiperRef.current.swiper.autoplay.start();
  };

  return (
    <Swiper
      ref={swiperRef}
      className="hero-swiper"
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="slide-content">
            <video src={slide.video} autoPlay muted loop playsInline />
            <div className="overlay">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSwiper;
