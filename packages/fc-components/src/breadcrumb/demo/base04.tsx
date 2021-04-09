/**
 * title: 带下拉菜单的面包屑
 * desc: 面包屑支持下拉菜单。
 */
import React from 'react';
import { FcBreadcrumb, FcMenu } from '@ngfed/fc-components';
const { Item, SubMenu, ItemGroup } = FcMenu;

export default () => {
  const FcMenus = (
    <FcMenu>
      <Item>General</Item>
      <Item>Layout</Item>
      <Item>Navigation</Item>
    </FcMenu>
  );

  return (
    <>
      <FcBreadcrumb>
        <FcBreadcrumb.Item>FC</FcBreadcrumb.Item>
        <FcBreadcrumb.Item>Component</FcBreadcrumb.Item>
        <FcBreadcrumb.Item overlay={FcMenus}>General</FcBreadcrumb.Item>
        <FcBreadcrumb.Item>Button</FcBreadcrumb.Item>
      </FcBreadcrumb>
    </>
  );
};
