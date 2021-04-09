/**
 * title: 触发事件
 * desc: 点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。
 */
import React from 'react';
import { FcDropdown, FcMenu, FcMessage } from '@ngfed/fc-components';
import { DownOutlined } from '@ant-design/icons';

const onClick = ({ key }) => {
  FcMessage.info(`Click on item ${key}`);
};
const menu = (
  <FcMenu onClick={onClick}>
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
