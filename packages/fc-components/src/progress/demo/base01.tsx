/**
 * title: 进度条
 * desc: 标准的进度条。
 */
import React from 'react';
import { FcProgress } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcProgress percent={30} />
      <FcProgress percent={50} status="active" />
      <FcProgress percent={70} status="exception" />
      <FcProgress percent={100} />
    </>
  );
};
