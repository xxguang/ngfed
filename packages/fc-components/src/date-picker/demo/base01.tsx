/**
 * title: 基本
 * desc: 最简单的用法，在浮层中可以选择或者输入日期 , 当 `showTime` 为一个对象时，其属性会传递给内建的 `TimePicker`。。
 */

import React from 'react';
import { FcSpace, FcDatePicker } from '@ngfed/fc-components';

export default () => {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <>
      <FcSpace direction="vertical">
        <FcDatePicker onChange={onChange} />
        <FcDatePicker onChange={onChange} showTime />
        <FcDatePicker onChange={onChange} picker="week" />
        <FcDatePicker onChange={onChange} picker="month" />
        <FcDatePicker onChange={onChange} picker="quarter" />
        <FcDatePicker onChange={onChange} picker="year" />
      </FcSpace>
    </>
  );
};
