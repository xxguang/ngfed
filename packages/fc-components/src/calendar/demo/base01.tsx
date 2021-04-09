/**
 * title: 基本
 * desc: 一个通用的日历面板，支持年/月切换。
 */

import React from 'react';
import { FcCalendar } from '@ngfed/fc-components';

export default () => {
  function onPanelChange(value, mode) {
    console.log(value.format('YYYY-MM-DD'), mode);
  }
  return (
    <>
      <FcCalendar onPanelChange={onPanelChange} />
    </>
  );
};
