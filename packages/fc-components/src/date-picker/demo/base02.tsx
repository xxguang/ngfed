/**
 * title: 范围选择器
 * desc: 通过设置 `picker` 属性，指定范围选择器类型。
 */

import React from 'react';
import { FcDatePicker, FcSpace } from '@ngfed/fc-components';

const { RangePicker } = FcDatePicker;

export default () => {
  return (
    <>
      <FcSpace direction="vertical" size={12}>
        <RangePicker />
        <RangePicker showTime />
        <RangePicker picker="week" />
        <RangePicker picker="month" />
        <RangePicker picker="year" />
      </FcSpace>
    </>
  );
};
