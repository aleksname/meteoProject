import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../../../styles/App.module.scss';
import { Pagination, FreeMode, EffectCoverflow } from 'swiper/modules';
import SpinSlids from './SpinSlids';
import texts from './textSliderClisk';

import icon1 from '../img/Random/RedRune.png';
import icon2 from '../img/Random/BlueRune.png';
import icon3 from '../img/Random/PurpleRune.png';
import icon4 from '../img/Random/BrownRune.png';
import icon5 from '../img/Random/GreenRune.png';
import icon6 from '../img/Random/QuestionPune.png';

export default function SpinSlider() {
  const [currentText, setCurrentText] = useState('');

  const handleClick = (index) => {
    setCurrentText(texts[index]);
  };

  return (
    <>
      <p className={styles.swipersSliderTitle}>
         КХ - КХ, ось і міфічні символи, які ми маємо прямо зараз розгадати
      </p>

      <Swiper 
        className={styles.mySwiper}
        effect={'coverflow'}
        grabCursor={true}
        coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }}
        slidesPerView={2.6}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, EffectCoverflow]}
        spaceBetween={200}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <button
            type="button"
            onClick={() => handleClick(0)}
          >
            <SpinSlids src={icon1} className={styles.spinSlids} />
          </button>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <button
            type="button"
            onClick={() => handleClick(1)}
          >
            <SpinSlids src={icon2} className={styles.spinSlids} />
          </button>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <button
            type="button"
            onClick={() => handleClick(2)}
          >
            <SpinSlids src={icon3} className={styles.spinSlids} />
          </button>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <button
            type="button"
            onClick={() => handleClick(3)}
          >
            <SpinSlids src={icon4} className={styles.spinSlids} />
          </button>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <button
            type="button"
            onClick={() => handleClick(4)}
          >
            <SpinSlids src={icon5} className={styles.spinSlids} />
          </button>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <button
            type="button"
            onClick={() => handleClick(5)}
          >
            <SpinSlids src={icon6} className={styles.spinSlids} />
          </button>
        </SwiperSlide>
      </Swiper>
      <p className={styles.currentText}>{currentText}</p> 
    </>
  );
}
