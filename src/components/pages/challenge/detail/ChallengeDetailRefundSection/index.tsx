import COLORS from '@/styles/ui/_theme.module.scss';
import { DotIcon } from '@/assets/icons';
import React from 'react';
import { Text } from '@/components/common';
import styles from './challenge_detail_refund_section.module.scss';

const TABLE_DATA = [
  { label: '100% 성공', value: '전액 환급 + 상금', label_primary: true },
  { label: '80% 이상 성공', value: '전액 환급' },
  { label: '80% 미만 성공', value: '예치금 일부 환급(진행률 기준)' },
];

const GRAPH_DATA = [
  { height: 0, percent: '0%' },
  { height: 20 },
  { height: 40 },
  { height: 60 },
  { height: 70 },
  { height: 103, percent: '80%' },
  { height: 103, percent: '100%', add_height: true },
];

const NOTI_DATA = [
  '상금은 80%미만 성공한 참가자들의 벌금으로 마련됩니다.',
  '최종 상금은 내가 건 돈에 비례해서 정해져요. 그래서 예치금이 많을수록 상금도 높아져요',
  '인증을 놓쳤을 때는 인증 패스를 사용해서 만회할 수 있어요. 단, 인증패스를 사용해서 100% 성공한 경우 공정성을 위해 상금은 받을 수 없어요.',
];
function ChallengeDetailRefundSection() {
  return (
    <div className={styles.container}>
      <Text.Title variant={18} className={styles.title}>
        챌린지 예치금 환급 안내
      </Text.Title>
      <div className={styles.tabel_wrapper}>
        {TABLE_DATA.map((ele) => (
          <div className={styles.table_row} key={ele.label}>
            <Text.Body variant={16} className={styles.label}>
              {ele.label_primary ? <em>{ele.label}</em> : ele.label}
            </Text.Body>
            <div className={styles.value}>
              <Text.Body variant={16}>{ele.value}</Text.Body>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.graph_wrapper}>
        {GRAPH_DATA.map((ele, idx) => (
          <div key={idx}>
            <div className={ele.add_height ? styles.add_height_graph_background : styles.graph_background}>
              <div
                className={`${styles.graph_inner} ${ele.add_height ? styles.add_height_graph_inner : ''}`}
                style={{ height: ele.height }}
              />
            </div>
            <Text.Body variant={14} className={ele.add_height ? styles.add_height_text : ''}>
              {ele.percent}
            </Text.Body>
          </div>
        ))}
      </div>

      <div className={styles.noti_wrapper}>
        {NOTI_DATA.map((ele) => (
          <div key={ele} className={styles.noti_row}>
            <div>
              <DotIcon fill={COLORS.GRAY_WHITE} />
            </div>
            <Text.Body variant={16}>{ele}</Text.Body>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChallengeDetailRefundSection;
