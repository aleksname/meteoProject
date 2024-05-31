import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from '../../../styles/App.module.scss';
import { Pagination, FreeMode, EffectCoverflow } from 'swiper/modules';
import SpinSlids from './SpinSlids';

import icon1 from '../img/Random/RedRune.png';
import icon2 from '../img/Random/BlueRune.png';
import icon3 from '../img/Random/PurpleRune.png';
import icon4 from '../img/Random/BrownRune.png';
import icon5 from '../img/Random/GreenRune.png';
import icon6 from '../img/Random/QuestionPune.png';


import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { useState } from 'react';

export default function SpinSlider() {

  const [anchor, setAnchor] = useState(null);

  const handleClick = (event) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);
  const id = open ? 'simple-popup' : undefined;
  
  return (
    <>
      <p className={styles.swipersSliderTitle}>
         КХ - КХ, ось і міфічні символи, які ми маємо прямо зараз розгадати
      </p>
       
      <BasePopup
        id={id}
        open={open}
        anchor={anchor}
        disablePortal
        className="z-50 rounded-lg font-sans font-medium text-sm mt-2 p-3 border border-solid border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-md text-slate-900 dark:text-slate-100"
      >
    <div>el</div>
      </BasePopup>
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
        <SwiperSlide className={styles.swiperSlide}>
          <button
            aria-describedby={id}
            type="button"
            onClick={handleClick}
          >
            <SpinSlids src={icon1} className={styles.spinSlids} />
          </button>
          
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <SpinSlids src={icon2} className={styles.spinSlids}/>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide} >
          <SpinSlids src={icon3} className={styles.spinSlids}/>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide} >
          <SpinSlids src={icon4} className={styles.spinSlids} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide} >
          <SpinSlids src={icon5} className={styles.spinSlids} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide} >
          <SpinSlids src={icon6} className={styles.spinSlids} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
