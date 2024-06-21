import { BottomNavigation, Text } from '@/components/common';

import React from 'react';

const ActivityPage: React.FC = () => {
  return (
    <>
      <div>
        <Text.Body variant={20}>Activity</Text.Body>
      </div>
      <BottomNavigation />
    </>
  );
};

export default ActivityPage;
