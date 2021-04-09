import React from 'react';
import { ConfigProvider } from 'antd';
import omit from 'rc-util/lib/omit';

function FcConfigProvider(props) {
  props = omit(props, ['']);
  return <ConfigProvider {...props} />;
}
export default FcConfigProvider;
