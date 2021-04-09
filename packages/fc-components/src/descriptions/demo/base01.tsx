/**
 * title: 基本
 * desc: 简单的展示。
 */
import React from 'react';
import { FcDescriptions } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcDescriptions title="User Info">
        <FcDescriptions.Item label="UserName">Zhou Maomao</FcDescriptions.Item>
        <FcDescriptions.Item label="Telephone">1810000000</FcDescriptions.Item>
        <FcDescriptions.Item label="Live">Hangzhou, Zhejiang</FcDescriptions.Item>
        <FcDescriptions.Item label="Remark">empty</FcDescriptions.Item>
        <FcDescriptions.Item label="Address">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </FcDescriptions.Item>
      </FcDescriptions>
    </>
  );
};
