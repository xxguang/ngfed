import React from 'react';
import { InputNumber } from 'antd';
import omit from 'rc-util/lib/omit';

function FcInputNumber(props) {
  props = omit(props, ['']);
  return <InputNumber {...props} />;
}
export default FcInputNumber;
