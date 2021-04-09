/**
 * title: 典型卡片
 * desc: 包含标题、内容、操作区域。
 */

import React from 'react';
import { FcCard } from '@ngfed/fc-components';
export default () => {
  return (
    <>
      <FcCard title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </FcCard>
      <FcCard
        size="small"
        title="Small size card"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </FcCard>
    </>
  );
};
