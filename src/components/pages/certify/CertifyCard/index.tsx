'use client';

import Image from 'next/image';
import { PlusCircleIcon } from '@/assets/icons';
import React from 'react';
import { Text } from '@/components/common';
import styles from './certify-card.module.scss';

const MOCK_DATA = {
  id: 1,
  title: '1만보 걷기',
  day: 6,
  date: '6.22(월)',
  thumbnail: null,
};

const MOCK_IMAGE_DATA = '';

interface Props {
  onClick: () => void;
  data: any;
}
const CertifyCard = ({ onClick, data }: Props) => {
  console.log(data);
  return (
    <div className={styles.container}>
      <div>
        <Text.Title variant={14} className={styles.date}>
          {MOCK_DATA.date}
        </Text.Title>
        <Text.Title variant={18}>{MOCK_DATA.day}일차</Text.Title>
      </div>
      {MOCK_IMAGE_DATA ? (
        // TODO video 인 경우 케이스 분리
        <Image
          width={80}
          height={120}
          sizes="100vw"
          className={styles.content}
          src={URL.createObjectURL(MOCK_IMAGE_DATA)}
          alt={'참가자리뷰'}
        />
      ) : (
        <div className={styles.post__button} onClick={onClick}>
          <div className={styles.content__input} />
          <PlusCircleIcon width={28} height={28} />
          <Text.Title variant={14}>인증하기</Text.Title>
        </div>
      )}
    </div>
  );
};

export default CertifyCard;
