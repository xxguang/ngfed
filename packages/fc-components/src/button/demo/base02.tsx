/**
 * title: 按钮形状
 * desc: 按钮有三种形状：circle圆形，round圆角，和方形(默认)
 */

import React from 'react';
import { FcButton, FcSpace } from '@ngfed/fc-components';
export default () => {
  return (
    <>
      <FcSpace>
        <FcButton shape="circle" type="primary">
          C
        </FcButton>
        <FcButton shape="round" type="primary">
          round button
        </FcButton>
        <FcButton type="primary">button</FcButton>
      </FcSpace>
    </>
  );
};
