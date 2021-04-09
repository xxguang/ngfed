/**
 * title: 基本
 * desc: 最简单的用法。
 */
import React from 'react';
import { FcAffix, FcButton } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcAffix offsetTop={100}>
        <FcButton type="primary"> offsetTop 100 </FcButton>
      </FcAffix>
      <br />
      <FcAffix offsetBottom={100}>
        <FcButton type="primary"> offsetBottom 100 </FcButton>
      </FcAffix>
    </>
  );
};
