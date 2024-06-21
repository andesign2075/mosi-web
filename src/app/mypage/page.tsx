import { BottomNavigation, Text } from '@/components/common';

import React from 'react';

const MypagePage: React.FC = () => {
  return (
    <>
      <div>
        <Text.Body variant={20}>Mypage</Text.Body>
      </div>
      <BottomNavigation />
    </>
  );
};

export default MypagePage;
