/**
 * title: 分隔符
 * desc: 相邻组件分隔符。
 */
import React from 'react';
import { FcSpace, FcButton } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcSpace split={'||'}>
        <FcButton type="primary"> primary </FcButton>
        <FcButton type="primary"> primary </FcButton>
        <FcButton type="primary"> primary </FcButton>
        <FcButton type="primary"> primary </FcButton>
        <FcButton type="primary"> primary </FcButton>
      </FcSpace>
    </>
  );
};
