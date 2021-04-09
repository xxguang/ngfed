/**
 * title: 圆圈颜色
 * desc: 圆圈颜色，绿色用于已完成、成功状态，红色表示告警或错误状态，蓝色可表示正在进行或其他默认状态，灰色表示未完成或失效状态。
 */

import React from 'react';
import { FcTimeline } from '@ngfed/fc-components';

export default () => {
  return (
    <FcTimeline>
      <FcTimeline.Item color="green">Create a services site 2015-09-01</FcTimeline.Item>
      <FcTimeline.Item color="green">Create a services site 2015-09-01</FcTimeline.Item>
      <FcTimeline.Item color="red">
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3 2015-09-01</p>
      </FcTimeline.Item>
      <FcTimeline.Item>
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </FcTimeline.Item>
      <FcTimeline.Item color="gray">
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </FcTimeline.Item>
      <FcTimeline.Item color="gray">
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </FcTimeline.Item>
    </FcTimeline>
  );
};
