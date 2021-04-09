/**
 * title: 基本
 * desc: 简单的徽章展示，当 count 为 0 时，默认不显示，但是可以使用 showZero 修改为显示。
 */

import React from 'react';
import { FcBadge } from '@ngfed/fc-components';
import { ClockCircleOutlined } from '@ant-design/icons';

import './base01.css';

export default () => {
  return (
    <>
      <FcBadge count={5}>
        <a href="#" className="head-example" />
      </FcBadge>
      <FcBadge count={0} showZero>
        <a href="#" className="head-example" />
      </FcBadge>
      <FcBadge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
        <a href="#" className="head-example" />
      </FcBadge>
    </>
  );
};
