/**
 * title: 日期格式
 * desc: 使用 `format` 属性，可以自定义日期显示格式。
 */

import React from 'react';
import { FcDatePicker, FcSpace } from '@ngfed/fc-components';
import moment from 'moment';

const { RangePicker } = FcDatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;

export default () => {
  return (
    <>
      <FcSpace direction="vertical" size={12}>
        <FcDatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
        <FcDatePicker
          defaultValue={moment('01/01/2015', dateFormatList[0])}
          format={dateFormatList}
        />
        <FcDatePicker
          defaultValue={moment('2015/01', monthFormat)}
          format={monthFormat}
          picker="month"
        />
        <RangePicker
          defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
          format={dateFormat}
        />
        <FcDatePicker defaultValue={moment('2015/01/01', dateFormat)} format={customFormat} />
      </FcSpace>
    </>
  );
};
