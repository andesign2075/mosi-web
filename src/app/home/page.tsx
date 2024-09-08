'use client';

import { BottomNavigation, Text } from '@/components/common';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import styles from './home.module.scss';
import { useGetChallenges } from '@/queries/challenge';
import { useRouter } from 'next/navigation';
import { useWindowSize } from '@/hooks/useWindowSize';

const MOCK_DATA = [
  {
    id: 1,
    thumbnail:
      'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/8023576e-e8b4-43e9-8ddc-1dbfe2c29af2/nike-run-club-app.jpg',
  },
  {
    id: 2,
    thumbnail:
      'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/0c680682-2040-4f9b-ae3b-5a8754f9c96b/nike-run-club-app.jpg',
  },
  {
    id: 3,
    thumbnail:
      'https://static.nike.com/a/images/w_1536,c_limit/5f738df9-453d-4bdc-b5b5-9f93ff6c4422/nike-run-club-%EC%95%B1%EC%9D%84-%ED%8C%8C%ED%8A%B8%EB%84%88-%EC%95%B1-%EB%B0%8F-%EA%B8%B0%EA%B8%B0%EC%97%90-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%97%B0%EA%B2%B0%ED%95%98%EB%82%98%EC%9A%94-%EB%82%98%EC%9D%B4%ED%82%A4-%EA%B3%A0%EA%B0%9D%EC%84%BC%ED%84%B0.jpg',
  },
];

const HomePage: React.FC = () => {
  const router = useRouter();
  const [currentIdx, setCurrentIdx] = useState(0);
  const windowSize = useWindowSize();

  const { data } = useGetChallenges();
  console.log(data);

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
          {MOCK_DATA.map((ele, idx) => (
            <SwiperSlide
              key={idx}
              style={{
                width: `${windowSize?.width * 0.87}px`,
                height: currentIdx === idx ? `${windowSize.height * 0.63}px` : `${windowSize.height * 0.56}px`,
              }}
              onClick={() => router.push(`/challenge/${ele.id}`)}
              className={`${styles.image__wrapper} ${currentIdx === idx ? styles.image__center : styles.image__side}`}
            >
              <Image fill src={ele.thumbnail} alt={''} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default HomePage;
