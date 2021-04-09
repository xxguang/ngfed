/**
 * title: 无边框
 * desc: 无边框样式。
 */

import React from 'react';
import { FcSpace, FcDatePicker } from '@ngfed/fc-components';

const { RangePicker } = FcDatePicker;

export default () => {
  return (
    <>
      <FcSpace direction="vertical" size={12}>
        <FcDatePicker bordered={false} />
        <FcDatePicker picker="week" bordered={false} />
        <FcDatePicker picker="month" bordered={false} />
        <FcDatePicker picker="year" bordered={false} />
        <RangePicker bordered={false} />
        <RangePicker picker="week" bordered={false} />
        <RangePicker picker="month" bordered={false} />
        <RangePicker picker="year" bordered={false} />
      </FcSpace>
    </>
  );
};
