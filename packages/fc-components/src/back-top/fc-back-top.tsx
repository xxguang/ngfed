import React from 'react';
import { BackTop } from 'antd';
import omit from 'rc-util/lib/omit';

function FcBackTop(props) {
  props = omit(props, ['duration']);
  return <BackTop {...props} />;
}
export default FcBackTop;
