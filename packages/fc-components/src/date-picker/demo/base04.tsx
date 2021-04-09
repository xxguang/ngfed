/**
 * title: 禁用
 * desc: 选择框的不可用状态。你也可以通过数组单独禁用 RangePicker 的其中一项。
 */

import React from 'react';
import { FcSpace, FcDatePicker } from '@ngfed/fc-components';
import moment from 'moment';
const { RangePicker } = FcDatePicker;
const dateFormat = 'YYYY-MM-DD';
export default () => {
  return (
    <>
      <FcSpace direction="vertical" size={12}>
        <FcDatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />
        <FcDatePicker picker="month" defaultValue={moment('2015-06', 'YYYY-MM')} disabled />
        <RangePicker
          defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]}
          disabled
        />
        <RangePicker
          defaultValue={[moment('2019-09-03', dateFormat), moment('2019-11-22', dateFormat)]}
          disabled={[false, true]}
        />
      </FcSpace>
    </>
  );
};
