/**
 * title: 带有图标的
 * desc: 图标放在文字前面。
 */
import React from 'react';
import { FcBreadcrumb } from '@ngfed/fc-components';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <FcBreadcrumb separator="/">
        <FcBreadcrumb.Item>
          <HomeOutlined />
        </FcBreadcrumb.Item>
        <FcBreadcrumb.Item href="">
          <UserOutlined /> Application Center
        </FcBreadcrumb.Item>
        <FcBreadcrumb.Item href="">Application List</FcBreadcrumb.Item>
        <FcBreadcrumb.Item>An Application</FcBreadcrumb.Item>
      </FcBreadcrumb>
    </>
  );
};
