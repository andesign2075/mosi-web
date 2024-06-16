import { BottomNavigation, Text } from '@/components/common';

import React from 'react';

const HomePage: React.FC = () => {
  return (
    <>
      <div>
        <Text.Body variant={20}>Home</Text.Body>
      </div>
      <BottomNavigation />
    </>
  );
};

export default HomePage;
