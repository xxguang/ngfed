/**
 * title: 交替展现
 * desc: 内容在时间轴两侧轮流出现。
 */

import React from 'react';
import { FcTimeline } from '@ngfed/fc-components';
import { ClockCircleOutlined } from '@ant-design/icons';

export default () => {
  return (
    <FcTimeline mode="alternate">
      <FcTimeline.Item>Create a services site 2015-09-01</FcTimeline.Item>
      <FcTimeline.Item color="green">Solve initial network problems 2015-09-01</FcTimeline.Item>
      <FcTimeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo.
      </FcTimeline.Item>
      <FcTimeline.Item color="red">Network problems being solved 2015-09-01</FcTimeline.Item>
      <FcTimeline.Item>Create a services site 2015-09-01</FcTimeline.Item>
      <FcTimeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
        Technical testing 2015-09-01
      </FcTimeline.Item>
    </FcTimeline>
  );
};
