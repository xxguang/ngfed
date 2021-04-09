/**
 * title: 无边框
 * desc: 在灰色背景上使用无边框的卡片。
 */

import React from 'react';
import { FcCard } from '@ngfed/fc-components';
import './base02.css';
export default () => {
  return (
    <>
      <div className="site-card-border-less-wrapper">
        <FcCard title="Card title" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </FcCard>
      </div>
    </>
  );
};
