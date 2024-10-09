import { AngleIcon, DotIcon } from '@/assets/icons';
import React, { useState } from 'react';

import COLORS from '@/styles/ui/_theme.module.scss';
import { Text } from '@/components/common';
import styles from './noti_list_section.module.scss';

const NOTI_DATA = ['최소 인원 미달로~', '최소 인원 미달로~'];
function NotiListSection() {
  const [contentVisible, setContentVisible] = useState<boolean>(false);
  return (
    <section className={styles.container}>
      <button className={styles.title_row} onClick={() => setContentVisible(!contentVisible)}>
        <Text.Body variant={16}>유의 안내</Text.Body>
        <AngleIcon
          fill={COLORS.GRAY_WHITE}
          width={24}
          height={24}
          transform={contentVisible ? 'rotate()' : 'rotate(180)'}
        />
      </button>
      {contentVisible ? (
        <div className={styles.content_container}>
          {NOTI_DATA.map((ele) => (
            <div key={ele} className={styles.noti_row}>
              <div>
                <DotIcon fill={COLORS.GRAY_WHITE} />
              </div>
              <Text.Body variant={16}>{ele}</Text.Body>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default NotiListSection;
