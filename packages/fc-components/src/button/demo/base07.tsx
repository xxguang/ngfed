/**
 * title: block块级按钮
 * desc: 设置`block` 属性将使按钮适合其父宽度
 */

import React from 'react';
import { FcButton, FcSpace } from '@ngfed/fc-components';
export default () => {
  return (
    <>
      <FcButton block>BlockButton</FcButton>
      <br />
      <br />
      <FcButton type="primary" block>
        BlockButton
      </FcButton>
    </>
  );
};
