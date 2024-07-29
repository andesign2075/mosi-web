'use client';

import { AngleIcon } from '@/assets/icons';
import COLORS from '@/styles/ui/_theme.module.scss';
import React from 'react';
import Text from '../text/Text';
import styles from './header.module.scss';
import { useRouter } from 'next/navigation';

const Header: React.FC<{
  headerTitle?: string;
  headerRight?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  variant?: 'dark' | 'light';
  circleBackButton?: boolean;
}> = ({ headerTitle, headerRight, variant = 'dark', circleBackButton = false }) => {
  const router = useRouter();
  return (
    <div
      className={styles.container}
      style={{
        background: circleBackButton ? 'transparent' : variant === 'dark' ? COLORS.GRAY_900 : COLORS.GRAY_WHITE,
      }}
    >
      <button
        className={circleBackButton ? styles.header__left__circle__arrow : styles.header__left}
        onClick={() => {
          router.back();
        }}
      >
        <AngleIcon
          transform="rotate(90)"
          style={{ transform: 'rotate(90deg)' }}
          fill={variant === 'dark' ? COLORS.GRAY_WHITE : '#333333'}
        />
      </button>
      {headerTitle ? (
        <Text.Title
          variant={18}
          className={styles.title}
          style={{ color: variant === 'dark' ? COLORS.GRAY_WHITE : '#2E2E2E' }}
        >
          {headerTitle}
        </Text.Title>
      ) : null}
      {headerRight ? <div className={styles.header__right}>{headerRight}</div> : null}
    </div>
  );
};

export default Header;
