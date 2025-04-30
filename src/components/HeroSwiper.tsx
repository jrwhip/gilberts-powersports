// components/HeroSwiper.tsx
'use client'; // Required for Next.js Client Component

import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper'; // Correct type
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './hero-swiper.css';

// Define slide interface
interface Slide {
  video: string;
  title: string;
  subtitle: string;
}

// Define props interface
interface HeroSwiperProps {
  slides: Slide[];
}

const HeroSwiper = ({ slides }: HeroSwiperProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper) {
      swiper.on('slideChange', () => {
        document.querySelectorAll('video').forEach(video => video.pause());
        const activeVideo = swiper.slides[swiper.activeIndex].querySelector('video');
        if (activeVideo instanceof HTMLVideoElement) activeVideo.play();
      });
    }
  }, []);

  const handleMouseEnter = () => {
    swiperRef.current?.autoplay.stop();
  };

  const handleMouseLeave = () => {
    swiperRef.current?.autoplay.start();
  };

  return (
    <Swiper
      className="hero-swiper"
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onSwiper={swiper => (swiperRef.current = swiper)} // Set ref here
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="slide-content">
            <video src={slide.video} muted loop playsInline />
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
