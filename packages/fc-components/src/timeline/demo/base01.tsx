/**
 * title: 基本用法
 * desc: 基本的时间轴。
 */
import React from 'react';
import { FcTimeline } from '@ngfed/fc-components';

export default () => {
  return (
    <FcTimeline>
      <FcTimeline.Item>Create a services site 2015-09-01</FcTimeline.Item>
      <FcTimeline.Item>Solve initial network problems 2015-09-01</FcTimeline.Item>
      <FcTimeline.Item>Technical testing 2015-09-01</FcTimeline.Item>
      <FcTimeline.Item>Network problems being solved 2015-09-01</FcTimeline.Item>
    </FcTimeline>
  );
};
