/**
 * title: 基本
 * desc: 点击 FcTimePicker，然后可以在浮层中选择或者输入某一时间。
 */

import React from 'react';
import { FcTimePicker } from '@ngfed/fc-components';
import moment from 'moment';

export default () => {
  function onChange(time, timeString) {
    console.log(time, timeString);
  }

  return (
    <>
      <FcTimePicker onChange={onChange} defaultValue={moment('00:00:00', 'HH:mm:ss')} />
    </>
  );
};
