/**
 * title: 分隔符
 * desc: 使用 separator=">" 可以自定义分隔符。
 */
import React from 'react';
import { FcBreadcrumb } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcBreadcrumb separator=">">
        <FcBreadcrumb.Item>Location</FcBreadcrumb.Item>
        <FcBreadcrumb.Item href="">Application Center</FcBreadcrumb.Item>
        <FcBreadcrumb.Item href="">Application List</FcBreadcrumb.Item>
        <FcBreadcrumb.Item>An Application</FcBreadcrumb.Item>
      </FcBreadcrumb>
    </>
  );
};
