/**
 * title: 小型进度圈
 * desc: 小一号的圈形进度。
 */
import React from 'react';
import { FcProgress } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcProgress type="circle" percent={30} width={80} />
      <FcProgress type="circle" percent={70} width={80} status="exception" />
      <FcProgress type="circle" percent={100} width={80} />
    </>
  );
};
