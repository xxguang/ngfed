/**
 * title: 按钮类型
 * desc: 按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。
 */

import React from 'react';
import { FcButton } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcButton type="default"> default button </FcButton>
      <FcButton type="primary"> primary button</FcButton>
      <FcButton type="ghost"> ghost button </FcButton>
      <FcButton type="dashed"> dashed button</FcButton>
      <FcButton type="link"> link button </FcButton>
      <FcButton type="text"> text button </FcButton>
    </>
  );
};
