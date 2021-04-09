/**
 * title: 前缀和后缀
 * desc: 在输入框上添加前缀或后缀图标。
 */

import React from 'react';
import { FcInput } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcInput prefix="￥" suffix="RMB" />
      <br />
      <br />
      <FcInput prefix="￥" suffix="RMB" disabled />
    </>
  );
};
