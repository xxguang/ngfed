/**
 * title: 预设范围
 * desc: 可以预设常用的日期范围以提高用户体验。
 */

import React from 'react';
import { FcSpace, FcDatePicker } from '@ngfed/fc-components';
import moment from 'moment';

const { RangePicker } = FcDatePicker;

function onChange(dates, dateStrings) {
  console.log('From: ', dates[0], ', to: ', dates[1]);
  console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

export default () => {
  return (
    <>
      <FcSpace direction="vertical" size={12}>
        <RangePicker
          ranges={{
            Today: [moment(), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
          }}
          onChange={onChange}
        />
        <RangePicker
          ranges={{
            Today: [moment(), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
          }}
          showTime
          format="YYYY/MM/DD HH:mm:ss"
          onChange={onChange}
        />
      </FcSpace>
      ,
    </>
  );
};
