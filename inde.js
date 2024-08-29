import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
import one from "./image.png";
import secound from "./helpimg01.png";
import third from "./helpimg04.png";
import forth from "./helpimg03.png";
import five from "./helpimg05.png";

const CustomSwiper = () => {
  const swiperRef = useRef(null);

  const cards = [
    { id: 1, img: one },
    { id: 2, img: secound },
    { id: 3, img: third },
    { id: 4, img: forth },
    { id: 5, img: five },
    { id: 6, img: one },
  ];

  const adjustImageHeight = (swiper) => {
    const slides = swiper.slides;
    slides.forEach((slide, index) => {
      const img = slide.querySelector('img');
      if (img) {
        if (index % 2 === 0) {
          img.style.height = '300px'; // Large height for first, third, etc.
        } else {
          img.style.height = '150px'; // Small height for second, fourth, etc.
        }
      }
    });
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    if (swiperInstance) {
      adjustImageHeight(swiperInstance);
      swiperInstance.on('slideChange', () => adjustImageHeight(swiperInstance));
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off('slideChange', () => adjustImageHeight(swiperInstance));
      }
    };
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={10}
      slidesPerView={4}
      loop={true}
      autoplay={{ delay: 1000, disableOnInteraction: false }} // Set quick auto scroll
      speed={800} // Control scroll speed
      className="custom-swiper"
    >
      {cards.map((card) => (
        <SwiperSlide key={card.id}>
          <div className="card">
            <img src={card.img} alt={`Card ${card.id}`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomSwiper;





.custom-swiper {
  width: 100%;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100%; /* Ensure the card takes the full height */
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Maintain the aspect ratio of the images */
  object-position: center; /* Center the image within the container */
  transition: height 0.3s ease; /* Smooth transition for height changes */
}