/**
 * title: 步骤进度条
 * desc: 带步骤的进度条。
 */
import React from 'react';
import { FcProgress } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcProgress percent={50} steps={3} />
      <br />
      <FcProgress percent={30} steps={5} />
      <br />
      <FcProgress percent={100} steps={5} size="small" strokeColor="#52c41a" />
    </>
  );
};
