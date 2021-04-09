/**
 * title: 基本
 * desc: 最简单的用法。
 */

import React from 'react';
import { FcTimePicker } from '@ngfed/fc-components';
const { RangePicker } = FcTimePicker;

export default () => {
  return (
    <>
      <FcTimePicker bordered={false} />
      <RangePicker bordered={false} />
    </>
  );
};
