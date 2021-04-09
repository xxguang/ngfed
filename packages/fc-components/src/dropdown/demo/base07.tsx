/**
 * title: 触发方式
 * desc: 默认是移入触发菜单，可以点击触发。
 */
import React from 'react';
import { FcDropdown, FcMenu } from '@ngfed/fc-components';
import { DownOutlined } from '@ant-design/icons';
const menu = (
  <FcMenu>
    <FcMenu.Item key="0">
      <a href="#">1st Fcmenu item</a>
    </FcMenu.Item>
    <FcMenu.Item key="1">
      <a href="#">2nd Fcmenu item</a>
    </FcMenu.Item>
    <FcMenu.Divider />
    <FcMenu.Item key="3">3rd Fcmenu item</FcMenu.Item>
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
