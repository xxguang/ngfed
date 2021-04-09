/**
 * title: 自定义时间轴点
 * desc: 可以设置为图标或其他自定义元素。
 */

import React from 'react';
import { FcTimeline } from '@ngfed/fc-components';
import { ClockCircleOutlined } from '@ant-design/icons';

export default () => {
  return (
    <FcTimeline>
      <FcTimeline.Item>Create a services site 2015-09-01</FcTimeline.Item>
      <FcTimeline.Item>Solve initial network problems 2015-09-01</FcTimeline.Item>
      <FcTimeline.Item dot={<ClockCircleOutlined className="Fctimeline-clock-icon" />} color="red">
        Technical testing 2015-09-01
      </FcTimeline.Item>
      <FcTimeline.Item>Network problems being solved 2015-09-01</FcTimeline.Item>
    </FcTimeline>
  );
};
