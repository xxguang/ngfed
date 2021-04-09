/**
 * title: 单位
 * desc: 通过前缀和后缀添加单位。
 */
import React from 'react';
import { LikeOutlined } from '@ant-design/icons';
import { FcStatistic, FcRow, FcCol } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcRow gutter={16}>
        <FcCol span={12}>
          <FcStatistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
        </FcCol>
        <FcCol span={12}>
          <FcStatistic title="Unmerged" value={93} suffix="/ 100" />
        </FcCol>
      </FcRow>
    </>
  );
};
