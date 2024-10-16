'use client';

import { FilmIcon, LogIcon, MypageIcon } from '@/assets/icons';

import COLORS from '@/styles/ui/_theme.module.scss';
import Link from 'next/link';
import React from 'react';
import styles from './bottom-navigation.module.scss';
import { usePathname } from 'next/navigation';

const BOTTOM_TABS = [
  {
    label: '챌린지',
    icon: FilmIcon,
    href: '/home',
  },
  {
    label: '챌린지로그',
    icon: LogIcon,
    href: '/activity',
  },
  {
    label: '마이페이지',
    icon: MypageIcon,
    href: '/mypage',
  },
];

const MAIN_PAGE_PATHS = ['/home', '/activity', '/mypage'];

const BottomNavigation: React.FC = () => {
  const pathname = usePathname();

  if (!MAIN_PAGE_PATHS.includes(pathname)) {
    return <></>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {BOTTOM_TABS.map((ele) => (
          <Link key={ele.label} href={ele.href} className={styles.itemWrapper}>
            <div className={styles.iconWrapper}>
              <ele.icon height={24} fill={pathname === ele.href ? COLORS.SEMENTIC_PRIMARY : COLORS.GRAY_400} />
            </div>
            <p style={{ color: pathname === ele.href ? COLORS.SEMENTIC_PRIMARY : COLORS.GRAY_400 }}>{ele.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
