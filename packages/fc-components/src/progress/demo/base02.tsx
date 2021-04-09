/**
 * title: 进度圈
 * desc: 圈形的进度。
 */
import React from 'react';
import { FcProgress } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcProgress type="circle" percent={75} />
      <FcProgress type="circle" percent={70} status="exception" />
      <FcProgress type="circle" percent={100} />
    </>
  );
};
