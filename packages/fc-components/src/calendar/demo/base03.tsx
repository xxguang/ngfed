/**
 * title: 卡片模式
 * desc: 用于嵌套在空间有限的容器中
 */

function onPanelChange(value, mode) {
  console.log(value, mode);
}

import React from 'react';
import { FcCalendar } from '@ngfed/fc-components';

import './base03.css';

export default () => {
  return (
    <div className="site-calendar-demo-card">
      <FcCalendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>
  );
};
