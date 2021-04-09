/**
 * title: 步长选项
 * desc: 可以使用 hourStep minuteStep secondStep 按步长展示可选的时分秒。
 */

import React from 'react';
import { FcTimePicker } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcTimePicker minuteStep={15} secondStep={10} />
    </>
  );
};
