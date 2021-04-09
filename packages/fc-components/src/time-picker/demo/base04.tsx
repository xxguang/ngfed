/**
 * title: 禁用
 * desc: 禁用时间选择
 */

import React from 'react';
import { FcTimePicker } from '@ngfed/fc-components';
import moment from 'moment';

export default () => {
  return (
    <>
      <FcTimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />
    </>
  );
};
