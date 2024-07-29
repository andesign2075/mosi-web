import COLORS from '@/styles/ui/_theme.module.scss';
import { CalendarIcon } from '@/assets/icons';
import Image from 'next/image';
import JoinedCountBadge from '../joined-count-badge/JoinedCountBadge';
import React from 'react';
import { Text } from '@/components/common';
import styles from './challenge-info-card.module.scss';
import { useRouter } from 'next/navigation';

const DUMMY_DATA = {
  image:
    'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/8023576e-e8b4-43e9-8ddc-1dbfe2c29af2/nike-run-club-app.jpg',
  title: '1만보 걷기',
  joinedCount: 324,
};

const ChallengeInfoCard: React.FC = () => {
  const router = useRouter();

  return (
    <section className={styles.container}>
      <div className={styles.inner__container}>
        <Image className={styles.image} src={DUMMY_DATA.image} width={135} height={205} alt="카드 이미지" />
        <div>
          <Text.Title variant={14} className={styles.badge}>
            모시 공식
          </Text.Title>
          <Text.Title variant={24} className={styles.title}>
            {DUMMY_DATA.title}
          </Text.Title>
          <div className={styles.info__wrapper}>
            <Text.Body className={styles.info__badge} variant={14}>
              주1회
            </Text.Body>
            <Text.Body className={styles.info__badge} variant={14}>
              2주동안
            </Text.Body>
          </div>
          <div className={styles.date}>
            <CalendarIcon fill={COLORS.GRAY_300} />
            <Text.Body variant={12}>6.17(월) ~ 6.30(일)</Text.Body>
          </div>
          <JoinedCountBadge count={23} />
        </div>
      </div>
      <button className={styles.button} onClick={() => router.push('/certify/2')}>
        <Text.Title variant={16}>인증하기(1/14)</Text.Title>
      </button>
    </section>
  );
};

export default ChallengeInfoCard;