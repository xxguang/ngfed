/**
 * title: 多级菜单
 * desc: 传入的菜单里有多个层级。
 */
import React from 'react';
import { FcDropdown, FcMenu } from '@ngfed/fc-components';
import { DownOutlined } from '@ant-design/icons';
const { SubMenu } = FcMenu;
const menu = (
  <FcMenu>
    <FcMenu.ItemGroup title="Group title">
      <FcMenu.Item>1st FcMenu item</FcMenu.Item>
      <FcMenu.Item>2nd FcMenu item</FcMenu.Item>
    </FcMenu.ItemGroup>
    <SubMenu title="sub FcMenu">
      <FcMenu.Item>3rd FcMenu item</FcMenu.Item>
      <FcMenu.Item>4th FcMenu item</FcMenu.Item>
    </SubMenu>
    <SubMenu title="disabled sub FcMenu" disabled>
      <FcMenu.Item>5d FcMenu item</FcMenu.Item>
      <FcMenu.Item>6th FcMenu item</FcMenu.Item>
    </SubMenu>
  </FcMenu>
);
export default () => {
  return (
    <>
      <FcDropdown overlay={menu} trigger={['click']}>
        <a onClick={(e) => e.preventDefault()}>
          Click me <DownOutlined />
        </a>
      </FcDropdown>
    </>
  );
};
