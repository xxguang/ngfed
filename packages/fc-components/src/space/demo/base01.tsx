/**
 * title: 间距大小
 * desc: 间距预设大、中、小三种大小。通过设置 `size` 为 `large` `middle` 分别把间距设为大、中间距。若不设置 `size`，则间距为小。
 */

import React from 'react';
import { FcSpace, FcButton } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      size未设置
      <div>
        <FcSpace>
          <FcButton type="primary"> primary </FcButton>
          <FcButton type="primary"> primary </FcButton>
          <FcButton type="primary"> primary </FcButton>
        </FcSpace>
      </div>
      size="small"
      <div>
        <FcSpace size="small">
          <FcButton type="primary"> primary </FcButton>
          <FcButton type="primary"> primary </FcButton>
          <FcButton type="primary"> primary </FcButton>
        </FcSpace>
      </div>
      size="middle"
      <div>
        <FcSpace size="middle">
          <FcButton type="primary"> primary </FcButton>
          <FcButton type="primary"> primary </FcButton>
          <FcButton type="primary"> primary </FcButton>
        </FcSpace>
      </div>
      size="large"
      <div>
        <FcSpace size="large">
          <FcButton type="primary"> primary </FcButton>
          <FcButton type="primary"> primary </FcButton>
          <FcButton type="primary"> primary </FcButton>
        </FcSpace>
      </div>
      size=100
      <div>
        <FcSpace size={100}>
          <FcButton type="primary"> primary </FcButton>
          <FcButton type="primary"> primary </FcButton>
          <FcButton type="primary"> primary </FcButton>
        </FcSpace>
      </div>
    </>
  );
};
