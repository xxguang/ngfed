/**
 * title: 分隔符
 * desc: 使用 `Breadcrumb.Separator` 可以自定义分隔符。
 */
import React from 'react';
import { FcBreadcrumb } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcBreadcrumb separator="">
        <FcBreadcrumb.Item>Location</FcBreadcrumb.Item>
        <FcBreadcrumb.Separator>:</FcBreadcrumb.Separator>
        <FcBreadcrumb.Item href="">Application Center</FcBreadcrumb.Item>
        <FcBreadcrumb.Separator />
        <FcBreadcrumb.Item href="">Application List</FcBreadcrumb.Item>
        <FcBreadcrumb.Separator />
        <FcBreadcrumb.Item>An Application</FcBreadcrumb.Item>
      </FcBreadcrumb>
    </>
  );
};
