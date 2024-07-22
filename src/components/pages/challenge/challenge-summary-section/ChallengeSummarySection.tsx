import { OfficialBadge, Text } from '@/components/common';

import COLORS from '@/styles/ui/_theme.module.scss';
import { CalendarIcon } from '@/assets/icons';
import Image from 'next/image';
import JoinedCountBadge from '../joined-count-badge/JoinedCountBadge';
import React from 'react';
import styles from './challenge-summary-section.module.scss';

const MOCK_DATA = {
  id: 1,
  title: '1만보 걷기',
  thumbnail:
    'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/8023576e-e8b4-43e9-8ddc-1dbfe2c29af2/nike-run-club-app.jpg',
};

const ChallengeSummarySection: React.FC = () => {
  return (
    <section className={styles.challenge__info__section}>
      <Image
        width={135}
        height={205}
        sizes="100vw"
        className={styles.thumbnail}
        src={MOCK_DATA.thumbnail}
        alt={'참가자리뷰'}
      />
      <div className={styles.challenge__info}>
        <div>
          <OfficialBadge />
          <Text.Title variant={18} className={styles.challenge__info__title}>
            {MOCK_DATA.title}
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
            <CalendarIcon fill={COLORS.GRAY_800} />
            <Text.Body variant={12}>6.17(월) ~ 6.30(일)</Text.Body>
          </div>
        </div>
        <JoinedCountBadge count={23} />
      </div>
    </section>
  );
};

export default ChallengeSummarySection;
