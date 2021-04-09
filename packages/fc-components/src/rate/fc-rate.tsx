import React from 'react';
import { Rate } from 'antd';
import omit from 'rc-util/lib/omit';

function FcRate(props) {
  props = omit(props, ['']);
  return <Rate {...props} />;
}
export default FcRate;
