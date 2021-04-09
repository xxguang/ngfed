/**
 * title: 三种大小
 * desc: 三种大小的输入框，大的用在表单中，中的为默认。
 */

import React from 'react';
import { FcTimePicker } from '@ngfed/fc-components';
import moment from 'moment';

export default () => {
  return (
    <>
      <FcTimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
      <FcTimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
      <FcTimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="small" />
    </>
  );
};
