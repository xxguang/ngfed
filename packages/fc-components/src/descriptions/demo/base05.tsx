/**
 * title: 垂直
 * desc: 垂直的列表。
 */
import React from 'react';
import { FcDescriptions } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcDescriptions title="User Info" layout="vertical">
        <FcDescriptions.Item label="UserName">Zhou Maomao</FcDescriptions.Item>
        <FcDescriptions.Item label="Telephone">1810000000</FcDescriptions.Item>
        <FcDescriptions.Item label="Live">Hangzhou, Zhejiang</FcDescriptions.Item>
        <FcDescriptions.Item label="Address" span={2}>
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </FcDescriptions.Item>
        <FcDescriptions.Item label="Remark">empty</FcDescriptions.Item>
      </FcDescriptions>
    </>
  );
};
