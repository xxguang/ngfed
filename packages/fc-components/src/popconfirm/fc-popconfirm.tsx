import React from 'react';
import { Popconfirm } from 'antd';
import omit from 'rc-util/lib/omit';

function FcPopconfirm(props) {
  props = omit(props, ['okType']);
  return <Popconfirm {...props} />;
}
export default FcPopconfirm;
