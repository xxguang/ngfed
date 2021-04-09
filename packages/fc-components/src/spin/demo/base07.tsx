/**
 * title: 自定义指示符
 * desc: 使用自定义指示符。
 */

import React from 'react';
import { FcSpin } from '@ngfed/fc-components';
import { LoadingOutlined } from '@ant-design/icons';

export default () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return <FcSpin indicator={antIcon} />;
};
