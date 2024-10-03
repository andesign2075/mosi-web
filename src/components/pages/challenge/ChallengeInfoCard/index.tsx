import COLORS from '@/styles/ui/_theme.module.scss';
import { CalendarIcon } from '@/assets/icons';
import Image from 'next/image';
import JoinedCountBadge from '../JoinedCountBadge';
import { MyChallengeData } from '@/types/activity';
import React from 'react';
import { Text } from '@/components/common';
import dayjs from 'dayjs';
import styles from './challenge-info-card.module.scss';
import { useRouter } from 'next/navigation';

interface Props {
  data: MyChallengeData;
}
const ChallengeInfoCard = ({ data }: Props) => {
  const router = useRouter();

  return (
    <section className={styles.container}>
      <div className={styles.inner__container}>
        <Image
          className={styles.image}
          src={data.challenge.thumbnailImageUrl}
          width={135}
          height={205}
          alt="카드 이미지"
        />
        <div className={styles.innter_right}>
          <div>
            <Text.Title variant={14} className={styles.badge}>
              모시 공식
            </Text.Title>
            <Text.Title variant={24} className={styles.title}>
              {data.challenge.title}
            </Text.Title>
            <div className={styles.info__wrapper}>
              <Text.Body className={styles.info__badge} variant={14}>
                주{data.challenge.periodWeeks}회
              </Text.Body>
              <Text.Body className={styles.info__badge} variant={14}>
                {data.challenge.weeklyFrequency}주동안
              </Text.Body>
            </div>
            <div className={styles.date}>
              <CalendarIcon fill={COLORS.GRAY_300} />
              <Text.Body variant={12}>
                {' '}
                {dayjs(data.challenge.startDate).format('M.DD(ddd)')} ~{' '}
                {dayjs(data.challenge.endDate).format('M.DD(ddd)')}
              </Text.Body>
            </div>
          </div>
          {/* TODO 참가자수 필드값 추가 되면 연동 필요 participantCount */}
          <JoinedCountBadge count={23} />
        </div>
      </div>
      <button className={styles.button} onClick={() => router.push('/certify/2')}>
        {/* TODO 횟수 필드값 추가되면 연동 필요 */}
        <Text.Title variant={16}>인증하기(1/14)</Text.Title>
      </button>
    </section>
  );
};

export default ChallengeInfoCard;
