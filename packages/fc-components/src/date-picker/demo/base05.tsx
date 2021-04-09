/**
 * title: 选择不超过七天的范围
 * desc: 这里举例如何用 `onCalendarChange` 和 `disabledDate` 来限制动态的日期区间选择。
 */

import React, { useState } from 'react';
import { FcDatePicker } from '@ngfed/fc-components';

const { RangePicker } = FcDatePicker;

export default () => {
  const [dates, setDates] = useState([]);
  const [hackValue, setHackValue] = useState();
  const [value, setValue] = useState();
  const disabledDate = (current) => {
    if (!dates || dates.length === 0) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
    const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
    return tooEarly || tooLate;
  };

  const onOpenChange = (open) => {
    if (open) {
      setHackValue([]);
      setDates([]);
    } else {
      setHackValue(undefined);
    }
  };

  return (
    <>
      <RangePicker
        value={hackValue || value}
        disabledDate={disabledDate}
        onCalendarChange={(val) => setDates(val)}
        onChange={(val) => setValue(val)}
        onOpenChange={onOpenChange}
      />
    </>
  );
};
