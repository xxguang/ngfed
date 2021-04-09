/**
 * title: 右侧时间轴点
 * desc: 时间轴点可以在内容的右边。
 */

import React from 'react';
import { FcTimeline } from '@ngfed/fc-components';
import { ClockCircleOutlined } from '@ant-design/icons';

export default () => {
  return (
    <FcTimeline mode="right">
      <FcTimeline.Item>Create a services site 2015-09-01</FcTimeline.Item>
      <FcTimeline.Item>Solve initial network problems 2015-09-01</FcTimeline.Item>
      <FcTimeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />} color="red">
        Technical testing 2015-09-01
      </FcTimeline.Item>
      <FcTimeline.Item>Network problems being solved 2015-09-01</FcTimeline.Item>
    </FcTimeline>
  );
};
