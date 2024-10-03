'use client';

import { BottomNavigation, Text } from '@/components/common';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import styles from './home.module.scss';
import { useGetChallenges } from '@/queries/challenge';
import { useRouter } from 'next/navigation';
import { useWindowSize } from '@/hooks/useWindowSize';

const HomePage: React.FC = () => {
  const router = useRouter();
  const [currentIdx, setCurrentIdx] = useState(0);
  const windowSize = useWindowSize();

  const { data } = useGetChallenges();

  if (!windowSize) {
    return <></>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.inner__container}>
        <div className={styles.logo__section}>
          <Image src={'/img/home/home_logo.png'} width={73} height={28} alt={''} />
        </div>
        <Text.Heading variant={24} className={styles.title}>
          진행중인 챌린지
        </Text.Heading>

        <Swiper
          direction="horizontal"
          spaceBetween={-26}
          slidesPerView={1}
          className={`mySwiper ${styles.list__container}`}
          style={{
            height: `${windowSize.height * 0.63}px`,
          }}
          onActiveIndexChange={(swiperCore) => setCurrentIdx(swiperCore.activeIndex)}
        >
          {data?.data.map((ele, idx) => (
            <SwiperSlide
              key={idx}
              style={{
                width: `${windowSize?.width * 0.87}px`,
                height: currentIdx === idx ? `${windowSize.height * 0.63}px` : `${windowSize.height * 0.56}px`,
              }}
              onClick={() => router.push(`/challenge/${ele.id}`)}
              className={`${styles.image__wrapper} ${currentIdx === idx ? styles.image__center : styles.image__side}`}
            >
              <Image fill src={ele.thumbnailImageUrl} alt={''} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default HomePage;
