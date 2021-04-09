/**
 * title: 带下拉框的按钮
 * desc: 左边是按钮，右边是额外的相关功能菜单。可设置 `icon` 属性来修改右边的图标。
 */
import React from 'react';
import { FcDropdown } from '@ngfed/fc-components';
import OverlayMenu from './menu';
import { DownOutlined } from '@ant-design/icons';

export default () => {
  function handleButtonClick() {
    console.log('onClick button');
  }
  return (
    <>
      <FcDropdown.Button
        onClick={() => handleButtonClick}
        overlay={OverlayMenu}
        icon={<DownOutlined />}
      >
        Dropdown
      </FcDropdown.Button>
    </>
  );
};
