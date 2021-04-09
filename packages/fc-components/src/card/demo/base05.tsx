/**
 * title: 栅格卡片
 * desc: 在系统概览页面常常和栅格进行配合。
 */

import React from 'react';
import { FcCard, FcCol, FcRow } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <div className="site-card-wrapper">
        <FcRow gutter={16}>
          <FcCol span={8}>
            <FcCard title="Card title" bordered={false}>
              Card content
            </FcCard>
          </FcCol>
          <FcCol span={8}>
            <FcCard title="Card title" bordered={false}>
              Card content
            </FcCard>
          </FcCol>
          <FcCol span={8}>
            <FcCard title="Card title" bordered={false}>
              Card content
            </FcCard>
          </FcCol>
        </FcRow>
      </div>
    </>
  );
};
