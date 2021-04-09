/**
 * title: 在卡片中使用
 * desc: 在卡片中展示统计数值。
 */
import React from 'react';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { FcStatistic, FcCard, FcRow, FcCol } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <div className="site-statistic-demo-card">
        <FcRow gutter={16}>
          <FcCol span={12}>
            <FcCard>
              <FcStatistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </FcCard>
          </FcCol>
          <FcCol span={12}>
            <FcCard>
              <FcStatistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{ color: '#cf1322' }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </FcCard>
          </FcCol>
        </FcRow>
      </div>
    </>
  );
};
