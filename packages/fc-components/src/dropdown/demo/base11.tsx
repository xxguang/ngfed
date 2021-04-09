/**
 * title: 右键菜单
 * desc: 默认是移入触发菜单，可以点击鼠标右键触发。
 */
import React from 'react';
import { FcDropdown, FcMenu } from '@ngfed/fc-components';
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
      <FcDropdown overlay={menu} trigger={['contextMenu']}>
        <div
          className="site-dropdown-context-menu"
          style={{
            textAlign: 'center',
            height: 200,
            lineHeight: '200px',
            background: '#f7f7f7',
            color: '#777',
          }}
        >
          Right Click on here
        </div>
      </FcDropdown>
    </>
  );
};
