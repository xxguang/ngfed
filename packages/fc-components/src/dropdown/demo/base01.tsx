/**
 * title: 基本
 * desc: 最简单的下拉菜单。
 */
import React from 'react';
import { FcDropdown } from '@ngfed/fc-components';
import OverlayMenu from './menu';
import { DownOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <FcDropdown overlay={OverlayMenu}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Hover me <DownOutlined />
        </a>
      </FcDropdown>
    </>
  );
};
