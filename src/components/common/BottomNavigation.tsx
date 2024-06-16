'use client';

import { HomeIcon, MypageIcon, SmileIcon } from '@/assets/icons';

import Link from 'next/link';
import React from 'react';
import styles from '@/styles/ui/bottom-navigation.module.scss';
import { usePathname } from 'next/navigation';

const BOTTOM_TABS = [
  {
    label: '챌린지',
    icon: HomeIcon,
    href: '/home',
  },
  {
    label: '챌린지로그',
    icon: SmileIcon,
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
              <ele.icon height={20} fill={pathname === ele.href ? '#0C5E5A' : '#CCCFD7'} />
            </div>
            <p>{ele.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
