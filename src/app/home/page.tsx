import { BottomNavigation, Text } from '@/components/common';

import Image from 'next/image';
import React from 'react';
import styles from './home.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner__container}>
        <div className={styles.logo__section}>
          <Image src={'/img/home/home_logo.png'} width={73} height={28} alt={''} />
        </div>
        <Text.Heading variant={24} className={styles.title}>
          진행중인 챌린지
        </Text.Heading>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default HomePage;
