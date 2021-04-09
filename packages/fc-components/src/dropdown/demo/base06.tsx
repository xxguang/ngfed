/**
 * title: 其他元素
 * desc: 分割线和不可用菜单项。
 */
import React from 'react';
import { FcDropdown, FcMenu } from '@ngfed/fc-components';
import { DownOutlined } from '@ant-design/icons';
const menu = (
  <FcMenu>
    <FcMenu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href="/">
        1st FcMenu item
      </a>
    </FcMenu.Item>
    <FcMenu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="/">
        2nd FcMenu item
      </a>
    </FcMenu.Item>
    <FcMenu.Divider />
    <FcMenu.Item key="3" disabled>
      3rd FcMenu item（disabled）
    </FcMenu.Item>
  </FcMenu>
);
export default () => {
  return (
    <>
      <FcDropdown overlay={menu}>
        <a onClick={(e) => e.preventDefault()}>
          Hover me <DownOutlined />
        </a>
      </FcDropdown>
    </>
  );
};
