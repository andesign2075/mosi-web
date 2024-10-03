import 'dayjs/locale/ko';

import { OfficialBadge, Text } from '@/components/common';

import COLORS from '@/styles/ui/_theme.module.scss';
import { CalendarIcon } from '@/assets/icons';
import Image from 'next/image';
import JoinedCountBadge from '../JoinedCountBadge';
import React from 'react';
import dayjs from 'dayjs';
import styles from './challenge-summary-section.module.scss';

dayjs.locale('ko');

interface Props {
  thumbnailImageUrl: string;
  title: string;
  periodWeeks: number;
  weeklyFrequency: number;
  startDate: string;
  endDate: string;
  participantCount: number;
}

const ChallengeSummarySection = (params: Props) => {
  return (
    <section className={styles.challenge__info__section}>
      <Image
        width={135}
        height={205}
        sizes="100vw"
        className={styles.thumbnail}
        src={params.thumbnailImageUrl}
        alt={'참가자리뷰'}
      />
      <div className={styles.challenge__info}>
        <div>
          <OfficialBadge />
          <Text.Title variant={18} className={styles.challenge__info__title}>
            {params.title}
          </Text.Title>
          <div className={styles.info__wrapper}>
            <Text.Body className={styles.info__badge} variant={14}>
              주{params.weeklyFrequency}회
            </Text.Body>
            <Text.Body className={styles.info__badge} variant={14}>
              {params.periodWeeks}주동안
            </Text.Body>
          </div>
          <div className={styles.date}>
            <CalendarIcon fill={COLORS.GRAY_800} />
            <Text.Body variant={12}>
              {dayjs(params.startDate).format('M.DD(ddd)')} ~ {dayjs(params.endDate).format('M.DD(ddd)')}
            </Text.Body>
          </div>
        </div>
        <JoinedCountBadge count={params.participantCount} />
      </div>
    </section>
  );
};

export default ChallengeSummarySection;
