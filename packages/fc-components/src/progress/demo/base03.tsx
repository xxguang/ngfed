/**
 * title: 小型进度条
 * desc: 适合放在较狭窄的区域内。
 */
import React from 'react';
import { FcProgress } from '@ngfed/fc-components';

export default () => {
  return (
    <div style={{ width: 170 }}>
      <FcProgress percent={30} size="small" />
      <FcProgress percent={50} size="small" status="active" />
      <FcProgress percent={70} size="small" status="exception" />
      <FcProgress percent={100} size="small" />
    </div>
  );
};
