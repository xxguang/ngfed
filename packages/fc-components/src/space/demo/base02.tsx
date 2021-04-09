/**
 * title: 垂直间距
 * desc: 相邻组件垂直间距。
 */

import React from 'react';
import { FcSpace, FcButton } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      direction="vertical"
      <div>
        <FcSpace direction="vertical">
          <FcButton type="primary"> primary </FcButton>
          <FcButton type="primary"> primary </FcButton>
          <FcButton type="primary"> primary </FcButton>
        </FcSpace>
      </div>
      direction="horizontal"
      <div>
        <FcSpace direction="horizontal">
          <FcButton type="primary"> primary </FcButton>
          <FcButton type="primary"> primary </FcButton>
          <FcButton type="primary"> primary </FcButton>
        </FcSpace>
      </div>
    </>
  );
};
