import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from '../../../styles/App.module.scss';
// import required modules
import { Pagination, FreeMode, EffectCoverflow } from 'swiper/modules';
import SpinSlids from './SpinSlids';


import icon1 from '../img/Random/RedRune.png';
import icon2 from '../img/Random/BlueRune.png';
import icon3 from '../img/Random/PurpleRune.png';
import icon4 from '../img/Random/BrownRune.png';
import icon5 from '../img/Random/GreenRune.png';
import icon6 from '../img/Random/QuestionPune.png';
import Link from 'next/link';

export default function SpinSlider() {
  
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
      // loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination, EffectCoverflow]}
      spaceBetween={200}
      >
        <button>
        <Link href='/'>
          <SwiperSlide className={styles.swiperSlide}><SpinSlids src={icon1} className={styles.spinSlids} /></SwiperSlide>
        </Link>        
        </button>
        <SwiperSlide className={styles.swiperSlide}><SpinSlids src={icon2} className={styles.spinSlids}/></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SpinSlids src={icon3} className={styles.spinSlids}/></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SpinSlids src={icon4} className={styles.spinSlids} /></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SpinSlids src={icon5} className={styles.spinSlids} /></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SpinSlids src={icon6} className={styles.spinSlids} /></SwiperSlide>

      </Swiper>
    </>
  );
}
