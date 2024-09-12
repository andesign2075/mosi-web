'use client';

import { Header, Text } from '@/components/common';
import React, { ChangeEvent, useState } from 'react';

import { FilledCircleIcon } from '@/assets/icons';
import { NextPage } from 'next';
import styles from './register.module.scss';

const CertifyRegister: NextPage = () => {
  const [selectedFile, setSelectedFile] = useState<File>();

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList;
    const targetFilesArray = Array.from(targetFiles);
    setSelectedFile(targetFilesArray[0]);
  };
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  // const [isUsingReview, setIseUsingReview] = useState<boolean>(false);

  return (
    <>
      <Header variant="dark" headerTitle="인증하기" />
      <div className={styles.container}>
        <div className={styles.inner_top}>
          {selectedFile ? (
            <section className={styles.selected_file_section}>
              <video
                width={180}
                height={256}
                className={styles.selected_file}
                src={URL.createObjectURL(selectedFile)}
              />
              <label className={styles.modify_btn} htmlFor="file">
                <FilledCircleIcon width={24} height={24} />
                <Text.Body variant={16}>파일 변경</Text.Body>
                <input
                  type="file"
                  id="file"
                  accept="video/*"
                  className={styles.content__input}
                  onChange={(e) => {
                    onChangeFile(e);
                  }}
                />
              </label>
            </section>
          ) : (
            <section className={styles.unselected_file_section}>
              <Text.Body variant={18} className={styles.title}>
                새롭게 촬영하거나 앨범에서 선택하여 <br />
                인증을 완료해보세요!
              </Text.Body>
              <label className={styles.file_add_button} htmlFor="file">
                <FilledCircleIcon />
                <input
                  type="file"
                  id="file"
                  accept="video/*"
                  className={styles.content__input}
                  onChange={(e) => {
                    onChangeFile(e);
                  }}
                />
              </label>
            </section>
          )}
        </div>
        <section>
          <input
            className={styles.content_title}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="여기를 눌러 제목을 입력해주세요"
          />
          <input
            className={styles.content_desc}
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="문구 또는 해시태그를 입력해주세요"
          />
        </section>
        <section className={styles.isusing_review_section}>
          <Text.Body variant={16} className={styles.isusing_review}>
            인증영상 리뷰로 사용 여부
          </Text.Body>
          <div>
            <Text.Body variant={14} className={styles.isusing_review_desc}>
              인증에 사용된 영상을 참가자 리뷰에 노출하는 것에 동의합니다.
            </Text.Body>
          </div>
        </section>
      </div>
    </>
  );
};

export default CertifyRegister;
