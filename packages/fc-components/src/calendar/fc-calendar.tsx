import React from 'react';
import { Calendar } from 'antd';
import omit from 'rc-util/lib/omit';

function FcCalendar(props) {
  props = omit(props, ['locale']);
  return (
    <>
      <Calendar {...props} />
    </>
  );
}
export default FcCalendar;
