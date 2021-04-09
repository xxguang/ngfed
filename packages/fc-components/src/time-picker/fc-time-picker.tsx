import React from 'react';
import { TimePicker } from 'antd';
import omit from 'rc-util/lib/omit';

function FcTimePicker(props) {
  props = omit(props, ['allowClear', 'clearIcon', 'renderExtraFooter']);
  return (
    <>
      <TimePicker {...props} />
    </>
  );
}
export default FcTimePicker;
