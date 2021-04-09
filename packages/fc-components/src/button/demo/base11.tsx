/**
 * title: 幽灵按钮
 * desc: 幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上,通过设置`ghost`属性即可实现。
 */

import React from 'react';
import { FcButton, FcSpace } from '@ngfed/fc-components';

const styleObj = {
  padding: `26px 16px 16px`,
  backgroundColor: `rgb(190, 200, 200)`,
};
export default () => {
  return (
    <>
      <div style={styleObj}>
        <FcSpace>
          <FcButton type="primary" ghost>
            Primary
          </FcButton>
          <FcButton ghost>Default</FcButton>
          <FcButton type="dashed" ghost>
            Dashed
          </FcButton>
        </FcSpace>
      </div>
    </>
  );
};
