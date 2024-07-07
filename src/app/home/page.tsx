'use client';

import { BottomNavigation, Text } from '@/components/common';
import React, { useState } from 'react';

import Image from 'next/image';
import Slider from 'react-slick';
import styles from './home.module.scss';

const TEMP_IMAGES = [
  'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/8023576e-e8b4-43e9-8ddc-1dbfe2c29af2/nike-run-club-app.jpg',
  'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/0c680682-2040-4f9b-ae3b-5a8754f9c96b/nike-run-club-app.jpg',
  'https://static.nike.com/a/images/w_1536,c_limit/5f738df9-453d-4bdc-b5b5-9f93ff6c4422/nike-run-club-%EC%95%B1%EC%9D%84-%ED%8C%8C%ED%8A%B8%EB%84%88-%EC%95%B1-%EB%B0%8F-%EA%B8%B0%EA%B8%B0%EC%97%90-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%97%B0%EA%B2%B0%ED%95%98%EB%82%98%EC%9A%94-%EB%82%98%EC%9D%B4%ED%82%A4-%EA%B3%A0%EA%B0%9D%EC%84%BC%ED%84%B0.jpg',
];

const HomePage: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const settings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    centerMode: true,
    centerPadding: '16px',
    arrows: false,
    beforeChange: (current: number, next: number) => setCurrentIdx(next),
  };
  console.log(typeof window !== 'undefined' ? window.innerWidth * 0.87 : '2');

  return (
    <div className={styles.container}>
      <div className={styles.inner__container}>
        <div className={styles.logo__section}>
          <Image src={'/img/home/home_logo.png'} width={73} height={28} alt={''} />
        </div>
        <Text.Heading variant={24} className={styles.title}>
          진행중인 챌린지
        </Text.Heading>

        <div>
          <Slider {...settings}>
            {TEMP_IMAGES.map((ele, idx) => (
              <div
                key={ele}
                className={styles.slider__wrapper}
                style={{
                  width: typeof window !== 'undefined' ? window.innerWidth * 0.87 + 'px' : '87%',
                  aspectRatio: 327 / 520,
                }}
              >
                <div
                  className={`${styles.image__wrapper} ${currentIdx === idx ? styles.image__center : styles.image__side}`}
                >
                  <Image fill src={ele} alt={''} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default HomePage;
