'use client';

import React, { ChangeEvent, useState } from 'react';

import Image from 'next/image';
import { PlusCircleIcon } from '@/assets/icons';
import { Text } from '@/components/common';
import styles from './certify-card.module.scss';

const MOCK_DATA = {
  id: 1,
  title: '1만보 걷기',
  day: 6,
  date: '6.22(월)',
  thumbnail: null,
};

const CertifyCard = () => {
  const [selectedImage, setSelectedImage] = useState<File>();
  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList;
    const targetFilesArray = Array.from(targetFiles);

    setSelectedImage(targetFilesArray[0]);
  };
  return (
    <div className={styles.container}>
      <div>
        <Text.Title variant={14} className={styles.date}>
          {MOCK_DATA.date}
        </Text.Title>
        <Text.Title variant={18}>{MOCK_DATA.day}일차</Text.Title>
      </div>
      {selectedImage ? (
        // TODO video 인 경우 케이스 분리
        <Image
          width={80}
          height={120}
          sizes="100vw"
          className={styles.content}
          src={URL.createObjectURL(selectedImage)}
          alt={'참가자리뷰'}
        />
      ) : (
        <label className={styles.post__button} htmlFor="file">
          <input
            type="file"
            id="file"
            className={styles.content__input}
            onChange={(e) => {
              onChangeFile(e);
            }}
          />
          <PlusCircleIcon width={28} height={28} />
          <Text.Title variant={14}>인증하기</Text.Title>
        </label>
      )}
    </div>
  );
};

export default CertifyCard;
