import React from 'react';
import { DatePicker } from 'antd';
import omit from 'rc-util/lib/omit';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
const { RangePicker } = DatePicker;
function FcDatePicker(props) {
  props = omit(props, ['allowClear', 'renderExtraFooter']);
  console.log(props);
  return (
    <>
      <DatePicker {...props} locale={locale} />
    </>
  );
}
function FcRangePicker(props) {
  //剔除的api放在后面的数组中
  props = omit(props, ['allowClear', 'renderExtraFooter']);
  console.log(props);
  return (
    <>
      <RangePicker {...props} locale={locale} />
    </>
  );
}

FcDatePicker.RangePicker = FcRangePicker;

export default FcDatePicker;
