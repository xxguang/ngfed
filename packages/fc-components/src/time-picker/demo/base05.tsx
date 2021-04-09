/**
 * title: 选择时分
 * desc: FcTimePicker 浮层中的列会随着 format 变化，当略去 format 中的某部分时，浮层中对应的列也会消失
 */

import React from 'react';
import { FcTimePicker } from '@ngfed/fc-components';
import moment from 'moment';

export default () => {
  const format = 'HH:mm';

  return (
    <>
      <FcTimePicker defaultValue={moment('12:08', format)} format={format} />
    </>
  );
};
