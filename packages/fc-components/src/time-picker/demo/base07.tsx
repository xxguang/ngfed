/**
 * title: 基本
 * desc: 最简单的用法。
 */

import React from 'react';
import { FcTimePicker } from '@ngfed/fc-components';

export default () => {
  function onChange(time, timeString) {
    console.log(time, timeString);
  }
  return (
    <>
      <FcTimePicker use12Hours onChange={onChange} />
      <FcTimePicker use12Hours format="h:mm:ss A" onChange={onChange} style={{ width: 140 }} />
      <FcTimePicker use12Hours format="h:mm a" onChange={onChange} />
    </>
  );
};
