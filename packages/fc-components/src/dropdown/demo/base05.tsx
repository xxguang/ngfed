/**
 * title: 箭头
 * desc: 可以展示一个箭头。
 */
import React from 'react';
import { FcDropdown, FcButton } from '@ngfed/fc-components';
import OverlayMenu from './menu';
import { DownOutlined } from '@ant-design/icons';
import './base05.css';

export default () => {
  return (
    <>
      <FcDropdown overlay={OverlayMenu} placement="bottomLeft" arrow className="FcDropdownMagin">
        <FcButton>bottomLeft</FcButton>
      </FcDropdown>
      <FcDropdown overlay={OverlayMenu} placement="bottomCenter" arrow className="FcDropdownMagin">
        <FcButton>bottomCenter</FcButton>
      </FcDropdown>
      <FcDropdown overlay={OverlayMenu} placement="bottomRight" arrow className="FcDropdownMagin">
        <FcButton>bottomRight</FcButton>
      </FcDropdown>
      <br />
      <FcDropdown overlay={OverlayMenu} placement="topLeft" arrow className="FcDropdownMagin">
        <FcButton>topLeft</FcButton>
      </FcDropdown>
      <FcDropdown overlay={OverlayMenu} placement="topCenter" arrow className="FcDropdownMagin">
        <FcButton>topCenter</FcButton>
      </FcDropdown>
      <FcDropdown overlay={OverlayMenu} placement="topRight" arrow className="FcDropdownMagin">
        <FcButton>topRight</FcButton>
      </FcDropdown>
    </>
  );
};
