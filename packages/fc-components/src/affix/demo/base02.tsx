/**
 * title: 固定状态改变的回调
 * desc: 可以获得是否固定的状态。
 */
import React from 'react';
import { FcAffix, FcButton } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcAffix offsetTop={120} onChange={(FcAffix) => console.log(FcAffix)}>
        <FcButton>120px to affix top</FcButton>
      </FcAffix>
    </>
  );
};
