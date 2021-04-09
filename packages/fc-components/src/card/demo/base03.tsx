/**
 * title: 简洁卡片
 * desc: 包只包含内容区域。
 */

import React from 'react';
import { FcCard } from '@ngfed/fc-components';
export default () => {
  return (
    <>
      <FcCard style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </FcCard>
    </>
  );
};
