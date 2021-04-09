/**
 * title: 分段进度条
 * desc: 标准的进度条。type="circle|dashboard" 时不支持分段颜色。
 */

import React from 'react';
import { Tooltip } from 'antd';
import { FcProgress } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <Tooltip title="3 done / 3 in FcProgress / 4 to do">
        <FcProgress percent={60} success={{ percent: 30 }} />
      </Tooltip>

      <Tooltip title="3 done / 3 in FcProgress / 4 to do">
        <FcProgress percent={60} success={{ percent: 30 }} type="circle" />
      </Tooltip>

      <Tooltip title="3 done / 3 in FcProgress / 4 to do">
        <FcProgress percent={60} success={{ percent: 30 }} type="dashboard" />
      </Tooltip>
    </>
  );
};
